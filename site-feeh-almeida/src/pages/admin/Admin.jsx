import React, { useContext, useEffect, useState } from "react";
import { Admin, ListGuesser, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import MyContext from "../../contexts/MyContext";
import { useForm, Controller } from "react-hook-form";
import { format } from "date-fns";
import api from "../../services/api";
import "./admin.css";
import ptBR from "date-fns/locale/pt-BR";
import DatePicker, { registerLocale } from "react-datepicker";

const Adm = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [filterUser, setFilterUser] = useState([]);

  const [startDate, setStartDate] = useState(new Date());
  const { data } = useContext(MyContext);

  const currentDate = new Date().getDate();
  const dateFilter = data.filter((item) => item.day === currentDate);

  /* setFilterUser(dateFilter); */

  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      date: startDate,
    },
  });
  let daySelect = startDate.getDate();
  let days = allUsers.filter((item) => item.day === daySelect);
  const handleDateChange = (date) => {
    setStartDate(date);
  };

  useEffect(() => {
    setValue("date", format(startDate, "PPPP", { locale: ptBR }));
    setFilterUser(dateFilter);
    setAllUsers(data);
  }, [startDate]);

  return (
    <section className="section admin" id="admin">
      <div className="container__admin container">
        <h1>Agendamentos Do dia</h1>
        {filterUser.map((user) => (
          <div className="div-users container" key={user._id}>
            <h3>
              <span>Data:</span> {user.date}
            </h3>
            <h3>
              <span>Nome:</span> {user.name}
            </h3>
            <h3>
              <span>Telefone:</span> {user.phone}
            </h3>
            <h3>
              <span>Serviço: </span>
              {(user.services = user.services.replace(/\d+$/, ""))}
            </h3>
            <h3>
              <span>Serviço Adicional: </span> {user.servicesAdditional}
            </h3>
            <h3>
              <span>horario:</span> {user.time}H
            </h3>
          </div>
        ))}
      </div>
      <h1 style={{ color: "#fffefe", marginBottom: "30px" }}>Filtrar dia</h1>
      <div className="container__calendar container">
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
              fixedHeight
            />
          )}
        />

        {days.map((user) => (
          <div className="div-dayselect container" key={user._id}>
            <h3>
              <span>Data:</span> {user.date}
            </h3>
            <h3>
              <span>Nome:</span> {user.name}
            </h3>
            <h3>
              <span>Telefone:</span> {user.phone}
            </h3>
            <h3>
              <span>Serviço: </span>
              {(user.services = user.services.replace(/\d+$/, ""))}
            </h3>
            <h3>
              <span>Serviço Adicional: </span>
              {
                (user.servicesAdditional = user.servicesAdditional.replace(
                  /\d+$/,
                  ""
                ))
              }
            </h3>
            <h3>
              <span>horario:</span> {user.time}H
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Adm;
