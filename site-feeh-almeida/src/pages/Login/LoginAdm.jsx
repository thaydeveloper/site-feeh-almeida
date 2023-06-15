import React from "react";
import "./loginAdm.css";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { useEffect } from "react";
const LoginAdm = () => {
  const { handleGetToken, handleAddToken } = useAuth();

  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    nameAdm: yup
      .string()
      .trim()
      .required("Campo Obrigatório")
      .max(20, "Máximo de 20 caracteries")
      .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, {
        message: "Somente letras",
      }),
    password: yup.string().required("Campo Obrigatório"),
  });

  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    if (!data) return;
    try {
      const response = await api.post("/adm", {
        ...data,
      });
      console.log(response.data);

      handleAddToken(response.data);
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="section login-adm">
      <div className="container__login container">
        <div className="content__login">
          <form className="content__login" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name" className="label__adm">
              Nome Adm
            </label>
            <input name="name" type="text" {...register("nameAdm")} />
            <label htmlFor="password" className="label__adm">
              Senha Adm
            </label>
            <input name="password" type="password" {...register("password")} />
            <button className="btn-login" onClick={() => onSubmit()}>
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginAdm;
