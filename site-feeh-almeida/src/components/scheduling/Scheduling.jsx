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
import {
  format,
  getHours,
  setMilliseconds,
  setSeconds,
  setHours,
  setMinutes,
  addMinutes,
} from "date-fns";

import ptBR from "date-fns/locale/pt-BR";
import "react-datepicker/dist/react-datepicker.css";
import MyContext from "../../contexts/MyContext";
import { UilCalender } from "@iconscout/react-unicons";
import { v4 as uuidv4 } from "uuid";

import { useNavigate } from "react-router-dom";
import { showSuccessNotification } from "../Toats";

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
  const { tablePrices, data, tableAdditionalServices } = useContext(MyContext);

  const [servicesState, setServices] = useState();

  const [servicesAdditional, setServicesAdditionals] = useState();

  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  let navigate = useNavigate();

  const [allUsers, setAllUsers] = useState([]);
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

  let dateSelect = startDate.getDate();

  let daySelect = allUsers.filter((item) => item.day === dateSelect);
  console.log(daySelect);

  const hoursScheduling = daySelect.map((obj) => {
    const timeParts = obj.time.split(":");

    if (timeParts.length === 2) {
      const hours = parseInt(timeParts[0], 10);
      const minutes = parseInt(timeParts[1], 10);

      return { hours, minutes };
    }

    return 0;
  });

  const calculateTotalDuration = (item) => {
    const totalDuration = item.durance
      .filter((duration) => duration !== null)
      .map((d) => parseFloat(d))
      .filter((d) => !isNaN(d));

    return totalDuration.length > 0
      ? totalDuration.reduce((acc, val) => acc + val)
      : 0;
  };

  /* const calculateAvailableTimes = () => {
    const selectedTime = format(startTime, "HH:mm");

    const busyTimesBeforeAppointment = daySelect
      .filter((item) => item.time < selectedTime)
      .map((item) => {
        const totalDuration = calculateTotalDuration(item);

        const [hours, minutes] = item.time.split(":");
        const startTime = setHours(
          setMinutes(new Date(), minutes),
          parseInt(hours, 10)
        );
        const endTime = addMinutes(startTime, totalDuration);
        return endTime;
      });

    const availableTimes = [];
    const workingStart = setHours(setMinutes(new Date(), 0), 8);
    const workingEnd = setHours(setMinutes(new Date(), 0), 18);
    let currentTime = workingStart;

    while (currentTime <= workingEnd) {
      let totalDurance = 0;

      daySelect
        .filter((item) => format(currentTime, "HH:mm") === item.time)
        .forEach((item) => {
          totalDurance += calculateTotalDuration(item);
        });

      const endTime = addMinutes(currentTime, totalDurance);

      const isAvailable = busyTimesBeforeAppointment.every(
        (busyTime) => busyTime < currentTime || busyTime >= endTime
      );

      if (isAvailable) {
        availableTimes.push(new Date(currentTime));
      }

      currentTime = addMinutes(currentTime, totalDurance || 30);
    }

    return availableTimes;
  }; */
  const selectedTime = format(startTime, "HH:mm");

  const busyTimesBeforeAppointment = daySelect
    .filter((item) => item.time < selectedTime)
    .map((item) => {
      const totalDuration = calculateTotalDuration(item);
      const [hours, minutes] = item.time.split(":");
      const startTime = setHours(
        setMinutes(new Date(), minutes),
        parseInt(hours, 10)
      );
      const endTime = (startTime, totalDuration);
      return endTime;
    });
  console.log(busyTimesBeforeAppointment);
  const calculateAvailableTimes = () => {
    const selectedTime = format(startTime, "HH:mm");

    const busyTimesBeforeAppointment = daySelect
      .filter((item) => item.time < selectedTime)
      .map((item) => {
        const totalDuration = calculateTotalDuration(item);
        const [hours, minutes] = item.time.split(":");
        const startTime = setHours(
          setMinutes(new Date(), minutes),
          parseInt(hours, 10)
        );
        const endTime = addMinutes(startTime, totalDuration);
        return endTime;
      });

    const availableTimes = [];
    const workingStart = setHours(setMinutes(new Date(), 0), 8);
    const workingEnd = setHours(setMinutes(new Date(), 0), 18);
    let currentTime = workingStart;

    while (currentTime <= workingEnd) {
      let totalDuration = 0;

      daySelect
        .filter((item) => format(currentTime, "HH:mm") === item.time)
        .forEach((item) => {
          totalDuration += calculateTotalDuration(item);
        });

      const endTime = addMinutes(currentTime, totalDuration);

      const isAvailable = busyTimesBeforeAppointment.every(
        (busyTime) => busyTime < currentTime || busyTime >= endTime
      );

      if (isAvailable) {
        availableTimes.push(new Date(currentTime));
      }

      currentTime = addMinutes(currentTime, totalDuration || 30);
    }

    return availableTimes;
  };

  const availableTimes = calculateAvailableTimes();

  useEffect(() => {
    setValue("phone", maskPhoneNumber(phoneValue));
    setValue("date", format(startDate, "PPPP", { locale: ptBR }));
    setValue("time", startTime.getHours(), "hh:mm aa", {
      locale: ptBR,
    });
    setValue("services", servicesState);
    setValue("servicesAdditional", servicesAdditional);
    setAllUsers(data);
    const availableTimes = calculateAvailableTimes();
  }, [phoneValue, startDate, startTime]);

  const handleDateChange = (date) => {
    setStartDate(date);
  };
  const handleTimeChange = (time) => {
    setStartTime(time);
  };

  const onSubmit = async (data) => {
    console.log(data);

    /* if (!data) return; */

    const selectedTime = format(startTime, "HH:mm", { locale: ptBR });
    data.time = selectedTime;
    const [title, price, decimal, duranceServices] = data.services.split(",");
    if (!data.servicesAdditional) {
      data.servicesAdditional = "";
    }

    const [
      titleAdditional,
      priceAdditional,
      decimalAdditional,
      duranceAdditional,
    ] = data.servicesAdditional.split(",");

    try {
      const response = await api.post("/scheduling", {
        ...data,
        id: uniqueId,
        day: startDate.getDate(),
        durance: [duranceServices, duranceAdditional],
      });

      if (response.status === 200) {
        showSuccessNotification("Agendamento feito com sucesso!");
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      }
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
                    calendarClassName="calender"
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
                  excludeTimes={hoursScheduling.map((time) => {
                    return setHours(
                      setMinutes(new Date(), time.minutes),
                      time.hours
                    );
                  })}
                  includeTimes={availableTimes.map((time) => {
                    return setHours(
                      setMinutes(new Date(), time.getMinutes()),
                      time.getHours()
                    );
                  })}
                  /*  timeIntervals={daySelect.map((time) => {
                    console.log(time.durance);
                    return time.durance[0];
                  })} */
                  showTimeSelectOnly
                  timeFormat="p"
                  timeCaption="Time"
                  dateFormat="HH:mm aa"
                  locale="ptBR"
                  /* timeClassName={handleColoer} */
                />
              )}
            />
            <span className="spanError error">{errors?.time?.message}</span>
          </div>

          <div className="fields" overflow="hidden">
            <label className="fields__label" htmlFor="servicos">
              Serviços *
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
              {tablePrices.map((item) => (
                <option
                  className="select__services"
                  value={[item.title, item.price, item.durance]}
                  key={item.title}
                >
                  {item.title}
                  {item.price}
                </option>
              ))}
            </select>
          </div>

          <div className="fields" overflow="hidden">
            <label className="fields__label" htmlFor="servicos">
              Serviços Adicionais
            </label>

            <select
              overflow="hidden"
              className="select__services"
              label="servicos"
              name="servicos"
              value={servicesAdditional}
              {...register("servicesAdditional")}
              onChange={(event) => setServicesAdditionals(event.target.value)}
            >
              {tableAdditionalServices.map((item) => (
                <option
                  className="select__services"
                  value={[item.title, item.price, item.durance]}
                  key={item.id}
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
