import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IRegisterFormValues } from "../../interfaces/userInterfaces";
import { UserContext } from "../../providers/UserContext";
import { Form } from "../../styles/form";
import { ModalStyle } from "../../styles/modal";
import {StyledButton} from "../../styles/buttons"
import { Input } from "../Input";

export const EditUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormValues>();
  const { userEditProfile, user, deleteUser, isEditUserModalVisible, setEditUserModalVisible } = useContext(UserContext);

  const submit: SubmitHandler<IRegisterFormValues> = (formData) => {
    userEditProfile(formData);
  };
  return (
    <ModalStyle>
      <div className="containerModal">
        <div className="headerModal">
              <h3>Edite seu perfil</h3>
              <StyledButton
                    onClick={() => setEditUserModalVisible(!isEditUserModalVisible)}
                >Fechar
              </StyledButton>
        </div>
        <Form onSubmit={handleSubmit(submit)}>
            <Input type="text" label="Nome completo" register={register("fullName")} defaultValue={user.fullName} error={errors.fullName} />
            <Input type="email" label="Seu e-mail" register={register("email")} defaultValue={user.email} error={errors.email} />
            <Input type="email" label="E-mail secundário" register={register("secondaryEmail")} defaultValue={user.secondaryEmail} error={errors.secondaryEmail} />
            <Input type="password" label="Edite sua senha" register={register("password")} defaultValue="" error={errors.password} />
            <Input type="text" label="número de contato" register={register("phone")} defaultValue={user.phone} error={errors.phone} />
            <Input type="text" label="imagem de perfil" register={register("profileImg")} defaultValue={user.profileImg ? user.profileImg: ""} error={errors.profileImg} />
          <div className="buttonContainer">
            <StyledButton type="submit">Enviar alterações</StyledButton>
            <StyledButton type="button" onClick={()=> deleteUser()}>Deletar minha conta</StyledButton>
          </div>
        </Form>
      </div>
    </ModalStyle>
  );
};
