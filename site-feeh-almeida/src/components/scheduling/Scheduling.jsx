import React from "react";
import "./scheduling.css";
import "react-datepicker/dist/react-datepicker.css";
import { useForm, Controller } from "react-hook-form";
import { phoneNumber } from "../../utils/validate";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { maskPhoneNumber } from "../../utils/mask";
import DatePicker, { registerLocale } from "react-datepicker";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import "react-datepicker/dist/react-datepicker.css";

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
  const date = new Date();
  const [startDate, setStartDate] = useState(date);
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
    setValue("date", format(startDate, "PPPP h:m aa", { locale: ptBR }));
  }, [phoneValue, startDate]);

  const handleDateChange = (date) => {
    setStartDate(date);
    /* console.log(format(date, "PPPP", { locale: ptBR })); */
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="scheduling section" id="scheduling">
      <h1>Agendamentos</h1>
      <div className="content__scheduling container">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="fields">
            <label className="fields__label">Nome *</label>
            <input
              className={errors?.name ? "error" : "input "}
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
            <span className="spanError error ">{errors?.phone?.message}</span>
          </div>
          <div className="fields">
            {
              <Controller
                /* className="date__picker" */
                control={control}
                name="date"
                render={({ field }) => (
                  <DatePicker
                    className="date__picker"
                    {...field}
                    selected={startDate}
                    onChange={handleDateChange}
                    /* showMonthDropdown */
                    showTimeSelect
                    timeFormat="p"
                    timeIntervals={120}
                    dateFormat="dd/MM/yyyy h:m aa"
                    locale="ptBR"
                  />
                )}
              />
            }
          </div>
          <button onClick={() => onSubmit()} className="button">
            Agendar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Scheduling;
