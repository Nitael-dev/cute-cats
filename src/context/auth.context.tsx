import React from "react";
import usePersistedState from "../hook/storage-state";
import { IUser, LoginDTO } from "../interface/user.interface";
import { LoginService } from "../services/auth.service";

interface IAuthContext {
  token: string;
  user: IUser;
  doLogin: (data: LoginDTO) => void;
}

const AuthContext = React.createContext({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = usePersistedState("user", {} as IUser);
  const [token, setToken] = usePersistedState("jwt_access_token", "");

  const doLogin = React.useCallback(async (data: LoginDTO) => {
    try {
      const result = await LoginService(data);
      setUser(result.data.user);
      setToken(result.data.token);
    } catch (error: any) {
      if (error.response.status === 500) {
        alert("Internal Server Error");
        return;
      }
    }
  }, [setUser, setToken]);

  return (
    <AuthContext.Provider value={{ token, user, doLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
