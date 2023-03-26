import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILoginInput } from "../../interfaces/userInterfaces";
import { UserContext } from "../../providers/UserContext";
import { Input } from "../Input";

export const LoginForm = () => {
  const { register, handleSubmit, formState: { errors }} = useForm<ILoginInput>();
  const { onLogin } = useContext(UserContext);
  
  const submit: SubmitHandler<ILoginInput> = (formData) => {
    onLogin(formData);
  }  


  return (
    <form onSubmit={handleSubmit(submit)}>
        <Input label="Seu e-mail" type="email" register={register("email")} error={errors.email} />
        <Input label="Sua senha" type="password" register={register("password")} error={errors.password} />
        <button type="submit">Entrar</button>
    </form>
  )
}