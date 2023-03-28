import { useContext } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { IContacts } from "../../interfaces/userInterfaces"
import { ContactsContext } from "../../providers/ContactsContext"
import { StyledButton } from "../../styles/buttons"
import { Form } from "../../styles/form"
import { ModalStyle } from "../../styles/modal"
import { Input } from "../Input"

export const EditContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<IContacts>()
    const {editContacts, isEditContactModalVisible, setEditContactModalVisible, clickedContact, deleteContacts} = useContext(ContactsContext)

    const submit: SubmitHandler<IContacts> = (formData) => {
        editContacts(formData, clickedContact!.id)
    }
    return (
        <ModalStyle>
            <div className="containerModal">
                <div className="headerModal">
                    <h3>Adicione um contato</h3>
                    <StyledButton
                    onClick={() => setEditContactModalVisible(!isEditContactModalVisible)}
                    >Fechar</StyledButton>
                </div>
                <Form onSubmit={handleSubmit(submit)}>
                    <Input type="text" label="Nome completo" register={register("fullName")} defaultValue={clickedContact!.fullName} error={errors.fullName} />
                    <Input type="email" label="Seu e-mail" register={register("email")} defaultValue={clickedContact!.email} error={errors.email} />
                    <Input type="email" label="E-mail secundário" register={register("secondaryEmail")} defaultValue={clickedContact!.secondaryEmail} error={errors.secondaryEmail} />
                    <Input type="text" label="número de contato" register={register("phone")} defaultValue={clickedContact!.phone} error={errors.phone} />
                    <Input type="text" label="imagem de perfil" register={register("profileImg")} defaultValue={clickedContact!.profileImg} error={errors.profileImg} />
                    <div className="buttonContainer">
                        <StyledButton type="submit">Enviar alterações</StyledButton>
                        <StyledButton type="button" onClick={()=> deleteContacts(clickedContact!.id)}>Excluir contato</StyledButton>
                    </div>
                </Form>
            </div>
        </ModalStyle>
    )
}