import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ILoginInput, IUser } from "../interfaces/userInterfaces";
import { api } from "./api";

export const userLogin = async (
  data: ILoginInput
):Promise<boolean> => {
    const navigate = useNavigate()
  try {
    const res = await api.post("/login", data);

    toast.success("Login realizado com sucesso");

    localStorage.setItem("@TOKEN", res.data.token);
    navigate("/dashboard")
    return true

  } catch (e) {
    console.log(e);
    toast.error("Acesso não autorizado.");
    return false
  }
};

