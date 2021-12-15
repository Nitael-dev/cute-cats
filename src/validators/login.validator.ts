import React from "react";
import { Login } from "../interface/user.interface";

export const validate = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  id: string,
  state: Login,
  setState: React.Dispatch<React.SetStateAction<Login>>
) => {
  if (id === "phone" && e.target.value.replace(/[^0-9]/g, "").length <= 11) {
    let newValue = e.target.value.replace(/[^0-9]/g, "");
    setState(
      (old) =>
        (old = {
          ...old,
          phoneNumber: newValue.replace(/(\d{2})(\d{5})(\d{4})/g, "($1)$2-$3"),
        })
    );
    if (state.phoneError === true && state.phoneNumber.length >= 10) {
      setState((old) => (old = { ...old, phoneError: false }));
    }
    return;
  }
  if (id === "pass") {
    setState((old) => (old = { ...old, password: e.target.value }));
    state.passError === true &&
      state.password.length >= 5 &&
      setState((old) => (old = { ...old, passError: false }));
    return;
  }
};

export const errorMessage = (id: string, state: boolean, value: string) => {
  let err = false;
  if (id === "phone" && state && value.length === 0) {
    err = true;
    return "Digite um número de telefone";
  }
  if (id === "phone" && state && value.length < 11) {
    err = true;
    return "Digite um número de telefone válido";
  }
  if (id === "pass" && state && value.length === 0) {
    err = true;
    return "Digite uma senha";
  }
  if (id === "pass" && state && value.length < 6) {
    err = true;
    return "A senha deve ter pelo menos 6 dígitos";
  }
  if (err === false && id === "pass") {
    return "Usuário ou senha inválidos.";
  }
  return "";
};
