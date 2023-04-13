import "./scheduling.css";
import "react-datepicker/dist/react-datepicker.css";
import { useForm, Controller } from "react-hook-form";
import { phoneNumber } from "../../utils/validate";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import { useEffect, useState, useContext } from "react";
import { maskPhoneNumber } from "../../utils/mask";
import DatePicker, { registerLocale } from "react-datepicker";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import "react-datepicker/dist/react-datepicker.css";
import MyContext from "../../contexts/MyContext";
import { UilCalender } from "@iconscout/react-unicons";
import { v4 as uuidv4 } from "uuid";

registerLocale("ptBR", ptBR);
const validationSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Campo Obrigatório")
    .max(20, "Máximo de 20 caracteries")
    .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, {
      message: "Somente letras",
    }),
  phone: yup
    .string()
    .required("Campo Obrigatório")
    .matches(phoneNumber, { message: "Formato invalido" }),
});

const Scheduling = () => {
  const valueContext = useContext(MyContext);

  const [servicesState, setServices] = useState();

  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());

  const uniqueId = uuidv4();
  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      date: startDate,
    },
  });

  const phoneValue = watch("phone");

  useEffect(() => {
    setValue("phone", maskPhoneNumber(phoneValue));
    setValue("date", format(startDate, "PPPP", { locale: ptBR }));
    setValue("time", startTime.getHours(), "hh:mm aa", {
      locale: ptBR,
    });
    setValue("services", servicesState);
  }, [phoneValue, startDate, startTime]);

  const handleDateChange = (date) => {
    setStartDate(date);
  };
  const handleTimeChange = (time) => {
    setStartTime(time);
  };

  const onSubmit = (date) => {
    if (!date) return;
    try {
      const response = api.post("/scheduling", { ...date, id: uniqueId });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="scheduling section" id="scheduling">
      <h1 className="title__scheduling">Agendamentos</h1>

      <div className="content__scheduling container">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="fields">
            <label className="fields__label">Nome *</label>

            <input
              className={errors?.name ? "error" : "input"}
              type="text"
              name="name"
              placeholder="Ex: Maria..."
              {...register("name")}
            />
            <span className="spanError error ">{errors?.name?.message}</span>
          </div>

          <div className="fields">
            <label className="fields__label">Telefone *</label>
            <input
              className={errors?.phone ? "error" : "input "}
              name="phone"
              type="tel"
              placeholder="Ex: (99) 99999-9999"
              {...register("phone")}
            />
            <span className="spanError error">{errors?.phone?.message}</span>
          </div>

          <div className="fields">
            <label className="fields__label">Dia e Horário *</label>
            {
              <Controller
                control={control}
                name="date"
                render={({ field }) => (
                  <DatePicker
                    className="date__picker"
                    {...field}
                    selected={startDate}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy"
                    locale="ptBR"
                  />
                )}
              />
            }
            <br />
            <Controller
              control={control}
              name="time"
              render={({ field }) => (
                <DatePicker
                  className="date__picker"
                  {...field}
                  selected={startTime}
                  onChange={handleTimeChange}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={120}
                  timeFormat="p"
                  timeCaption="Time"
                  dateFormat="HH:mm aa"
                  locale="ptBR"
                />
              )}
            />
          </div>

          <div className="fields" overflow="hidden">
            <label className="fields__label" htmlFor="servicos">
              serviços *
            </label>

            <select
              overflow="hidden"
              className="select__services"
              label="servicos"
              name="servicos"
              value={servicesState}
              {...register("services")}
              onChange={(event) => setServices(event.target.value)}
            >
              {valueContext.map((item) => (
                <option
                  className="select__services"
                  value={[item.title, item.price]}
                  key={item.title}
                >
                  {item.title}
                  {item.price}
                </option>
              ))}
            </select>
          </div>

          <button onClick={() => onSubmit()} className="button-submit button">
            Agendar
            <UilCalender className="icon-calender" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Scheduling;
