import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILoginInput } from "../../interfaces/userInterfaces";
import { UserContext } from "../../providers/UserContext";
import { Form } from "../../styles/form";
import { Input } from "../Input";

export const LoginForm = () => {
  const { register, handleSubmit, formState: { errors }} = useForm<ILoginInput>();
  const { onLogin } = useContext(UserContext);
  
  const submit: SubmitHandler<ILoginInput> = (formData) => {
    onLogin(formData);
  }  


  return (
    <Form onSubmit={handleSubmit(submit)}>
        <Input label="Seu e-mail" type="email" register={register("email")} defaultValue="" error={errors.email} />
        <Input label="Sua senha" type="password" register={register("password")} defaultValue="" error={errors.password} />
        <button type="submit">Entrar</button>
    </Form>
  )
}