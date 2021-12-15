import { LoginDTO } from "../interface/user.interface";
import { api } from "./api.service";

export const LoginService = async (data: LoginDTO) => {
  const result = await api().post("/v1/user/login", data);
  return result;
};
