import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IdefaultProviderProps } from "../interfaces/reactDefaultInterfaces";
import {
  ILoginInput,
  IRegisterFormValues,
  IUser,
} from "../interfaces/userInterfaces";
import { api } from "../services/api";
import { userLogin } from "../services/userLogin";

interface IUserContext {
loading: boolean;
setLoading: React.Dispatch<React.SetStateAction<boolean>>;
user: IUser | null;
onLogin: (data: ILoginInput) => Promise<void>;
userLogout: () => Promise<void>;
userRegister: (formData: IRegisterFormValues) => Promise<boolean>
}

export const UserContext = createContext({} as IUserContext);
export const UserProvider = ({ children }: IdefaultProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate();

  const userRegister = async (formData: IRegisterFormValues) => {
    try {
      const response = await api.post("/users", formData);
      setLoading(true);
      toast.success("Cadastro realizado com sucesso.");
      setUser(response.data);
      localStorage.setItem("@userData", JSON.stringify(user));
      navigate("/");
      return true;
    } catch (error) {
      console.log(error);
      toast.error("Email já está em uso.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const onLogin = async (data: ILoginInput) => {
    const res = await userLogin(data);

    if (res) {
      navigate("/dashboard");
    }
  };

  const userLogout = async () => {
    setUser(null);
    localStorage.removeItem("@TOKEN");
    navigate("/");
  };
  return <UserContext.Provider value={{loading, setLoading, user, onLogin, userRegister, userLogout}}></UserContext.Provider>
};

