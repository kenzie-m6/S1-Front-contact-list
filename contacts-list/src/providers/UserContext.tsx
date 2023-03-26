import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IdefaultProviderProps } from "../interfaces/reactDefaultInterfaces";
import {
  IContacts,
  ILoginInput,
  IRegisterFormValues,
  IUser,
} from "../interfaces/userInterfaces";
import { Api } from "../services/api";

interface IUserContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser | null;
  contacts: IContacts[]
  setContacts: React.Dispatch<React.SetStateAction<IContacts[]>>
  onLogin: (data: ILoginInput) => Promise<void>;
  userLogout: () => Promise<void>;
  userRegister: (formData: IRegisterFormValues) => Promise<void>;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IdefaultProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("@TOKEN"));
  const [user, setUser] = useState<IUser | null>(null);
  const [contacts, setContacts] = useState<IContacts[]>([]);

  const navigate = useNavigate();

  const userRegister = async (formData: IRegisterFormValues): Promise<void> => {
    try {
      await Api.post("/users", formData);

      setLoading(true);
      toast.success("Cadastro realizado com sucesso.");
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const onLogin = async (data: ILoginInput) => {
    try {
      const res = await Api.post("/login", data);
  
      toast.success("Login realizado com sucesso");
  
      localStorage.setItem("@TOKEN", res.data.token);
      const userData = await Api.get("users/user")
      setUser(userData.data)
      setContacts(userData.data.contacts)
      navigate("/dashboard")
  
    } catch (e) {
      console.log(e);
      toast.error("Acesso não autorizado.");
    }
  };

  useEffect(() => {
    !token && navigate("/");
  }, []);

  const userLogout = async () => {
    setUser(null);
    setToken(null)
    localStorage.removeItem("@TOKEN");

    navigate("/");
  };
  return (
    <UserContext.Provider
      value={{ loading, setLoading, onLogin, user, contacts, setContacts, userRegister, userLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};
