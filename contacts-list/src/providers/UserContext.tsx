import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IUserContext } from "../interfaces/contextsInterfaces";
import { IdefaultProviderProps } from "../interfaces/reactDefaultInterfaces";
import {
  ILoginInput,
  IRegisterFormValues,
  IUser,
} from "../interfaces/userInterfaces";
import { Api } from "../services/api";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IdefaultProviderProps) => {
  const [token, setToken] = useState(localStorage.getItem("@TOKEN"));
  const [user, setUser] = useState<IUser>({} as IUser);
  const [isEditUserModalVisible, setEditUserModalVisible] = useState(false);

  const navigate = useNavigate();

  const userRegister = async (formData: IRegisterFormValues): Promise<void> => {
    try {
      await Api.post("/users", formData);
      toast.success("Cadastro realizado com sucesso.");
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
  

  const profile = async () => {
    try {
      const response = await Api.get("/users/user", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data);
      // localStorage.setItem(JSON.stringify(response.data.contacts));
    } catch (e) {
      console.log(e);
    }
  };
  // useEffect(() =>{
  //   profile()
  // }, [token])

  const userEditProfile = async (
    formData: IRegisterFormValues
  ): Promise<void> => {
    try {
      await Api.patch("/users", formData);

      toast.success("Perfil editado com sucesso.");
      setEditUserModalVisible(!isEditUserModalVisible);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteUser = async (): Promise<void> => {
    try {
      await Api.delete("/users");

      toast.success("Perfil deletado com sucesso.");
      setEditUserModalVisible(!isEditUserModalVisible);
      setUser({} as IUser);
      setToken(null);
      localStorage.removeItem("@TOKEN");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const onLogin = async (data: ILoginInput) => {
    try {
      const res = await Api.post("/login", data);
      toast.success("Login realizado com sucesso");
      setToken(res.data.token);
      localStorage.setItem("@TOKEN", res.data.token);
      profile();
      navigate("/dashboard");
    } catch (e) {
      console.log(e);
      toast.error("Acesso não autorizado.");
    }
  };

  // useEffect(() => {
  //   token ? navigate("/dashboard") : navigate("/");
  //   const userinfo = async () => {
  //     const profile = await Api.get("/users/user");
  //     setUser(profile.data);
  //   };
  //   userinfo();
  // }, [token]);

  const userLogout = async () => {
    setToken(null);
    localStorage.removeItem("@TOKEN");
    navigate("/");
  };
  return (
    <UserContext.Provider
      value={{
        profile,
        onLogin,
        user,
        userRegister,
        userLogout,
        userEditProfile,
        deleteUser,
        setEditUserModalVisible,
        isEditUserModalVisible,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
