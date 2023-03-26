import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IRegisterFormValues } from "../../interfaces/userInterfaces";
import { UserContext } from "../../providers/UserContext";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaRegister } from "../../schemas/schemaRegister";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormValues>();
  const { userRegister } = useContext(UserContext);

  const submit: SubmitHandler<IRegisterFormValues> = (formData) => {
    console.log(`Form Data-> ${formData}`) 
    userRegister(formData);
  };

  return (

      <form onSubmit={handleSubmit(submit)}>
        <Input type="text" label="Nome completo" register={register("fullName")} error={errors.fullName} />
          <Input type="email" label="Seu e-mail" register={register("email")} error={errors.email} />
          <Input type="email" label="E-mail secundário" register={register("secondaryEmail")} error={errors.secondaryEmail} />
          <Input type="password" label="Crie uma senha" register={register("password")} error={errors.password} />
          <Input type="text" label="número de contato" register={register("phone")} error={errors.phone} />
          <Input type="text" label="imagem de perfil" register={register("profileImg")} error={errors.profileImg} />
        <button type="submit">Enviar</button>
      </form>
  );
};
