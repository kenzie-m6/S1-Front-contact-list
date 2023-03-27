import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IRegisterFormValues } from "../../interfaces/userInterfaces";
import { UserContext } from "../../providers/UserContext";
import { Input } from "../Input";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormValues>();
  const { userRegister } = useContext(UserContext);

  const submit: SubmitHandler<IRegisterFormValues> = (formData) => {
    userRegister(formData);
  };
  return (
      <form onSubmit={handleSubmit(submit)}>
          <Input type="text" label="Nome completo" register={register("fullName")} defaultValue="" error={errors.fullName} />
          <Input type="email" label="Seu e-mail" register={register("email")} defaultValue="" error={errors.email} />
          <Input type="email" label="E-mail secundário" register={register("secondaryEmail")} defaultValue="" error={errors.secondaryEmail} />
          <Input type="password" label="Crie uma senha" register={register("password")} defaultValue="" error={errors.password} />
          <Input type="text" label="número de contato" register={register("phone")} defaultValue="" error={errors.phone} />
          <Input type="text" label="imagem de perfil" register={register("profileImg")} defaultValue="" error={errors.profileImg} />
        <button type="submit">Enviar</button>
      </form>
  );
};
