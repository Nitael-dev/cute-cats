import { Box, Button, TextField } from "@mui/material";
import React from "react";
import "./styles.scss";
import { Login } from "../../interface/user.interface";
import { errorMessage, validate } from "../../validators/login.validator";
import { useAuth } from "../../context/auth.context";

const SignIn: React.FC = () => {
  const { doLogin } = useAuth();

  const [state, setState] = React.useState<Login>({
    password: "",
    phoneNumber: "",
    passError: false,
    phoneError: false,
  });

  const data = {
    phoneNumber: state.phoneNumber.replace(/[^0-9]/g, ""),
    password: state.password,
  };

  const loginHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await doLogin(data);
      window.location.replace("/home");
    } catch (error) {
      if (state.phoneNumber.length !== 14) {
        setState((old) => (old = { ...old, phoneError: true }));
      }
      if (state.password.length < 6) {
        setState((old) => (old = { ...old, passError: true }));
      }
    }
  };

  return (
    <Box className="main">
      <form
        onSubmit={(e) => {
          loginHandle(e);
        }}
        className="container"
      >
        <Box className="input-container">
          <Box className="input text">Telefone:</Box>
          <TextField
            className={`phone${state.phoneError === true ? " error" : ""}`}
            helperText={`${errorMessage(
              "phone",
              state.phoneError,
              state.phoneNumber
            )}`}
            error={state.phoneError}
            value={state.phoneNumber}
            onChange={(e) => {
              validate(e, "phone", state, setState);
            }}
          />
        </Box>
        <Box className="input-container">
          <Box className="input text">Senha:</Box>
          <TextField
            type="password"
            className={`phone${state.passError === true ? " error" : ""}`}
            helperText={`${errorMessage(
              "pass",
              state.passError,
              state.password
            )}`}
            error={state.passError}
            value={state.password}
            onChange={(e) => {
              validate(e, "pass", state, setState);
            }}
          />
        </Box>
        <Button type="submit" variant="contained" id="button">
          Login
        </Button>
      </form>
      <Box className="container right"></Box>
    </Box>
  );
};

export default SignIn;
