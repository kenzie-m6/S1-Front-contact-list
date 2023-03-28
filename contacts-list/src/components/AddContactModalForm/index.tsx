import { useContext } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { IContacts } from "../../interfaces/userInterfaces"
import { ContactsContext } from "../../providers/ContactsContext"
import { StyledButton } from "../../styles/buttons";
import { Form } from "../../styles/form";
import { ModalStyle } from "../../styles/modal";
import { Input } from "../Input";

export const AddContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<IContacts>()
    const {addContacts, isAddContactModalVisible, setAddContactModalVisible} = useContext(ContactsContext)

    const submit: SubmitHandler<IContacts> = (formData) => {
        addContacts(formData)
    }
    return (
        <ModalStyle>
            <div className="containerModal">
                <div className="headerModal">
                    <h3>Adicione um contato</h3>
                    <StyledButton
                    onClick={() => setAddContactModalVisible(!isAddContactModalVisible)}
                    >Fechar</StyledButton>
                </div>
                <Form className="modal" onSubmit={handleSubmit(submit)}>
                    <Input type="text" label="Nome completo" register={register("fullName")} defaultValue="" error={errors.fullName} />
                    <Input type="email" label="Seu e-mail" register={register("email")} defaultValue="" error={errors.email} />
                    <Input type="email" label="E-mail secundário" register={register("secondaryEmail")} defaultValue="" error={errors.secondaryEmail} />
                    <Input type="text" label="número de contato" register={register("phone")} defaultValue="" error={errors.phone} />
                    <Input type="text" label="imagem de perfil" register={register("profileImg")} defaultValue="" error={errors.profileImg} />
                    <StyledButton type="submit">Enviar</StyledButton>
                </Form>
            </div>
        </ModalStyle>
    )
}