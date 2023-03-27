import { useContext } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { IContacts } from "../../interfaces/userInterfaces"
import { ContactsContext } from "../../providers/ContactsContext"
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
        <>
            <div className="headerModal">
                <h3>Adicione uma tecnologia</h3>
                <button
                onClick={() => setAddContactModalVisible(!isAddContactModalVisible)}
                >Fechar</button>
            </div>
            <form onSubmit={handleSubmit(submit)}>
                <Input type="text" label="Nome completo" register={register("fullName")} defaultValue="" error={errors.fullName} />
                <Input type="email" label="Seu e-mail" register={register("email")} defaultValue="" error={errors.email} />
                <Input type="email" label="E-mail secundário" register={register("secondaryEmail")} defaultValue="" error={errors.secondaryEmail} />
                <Input type="text" label="número de contato" register={register("phone")} defaultValue="" error={errors.phone} />
                <Input type="text" label="imagem de perfil" register={register("profileImg")} defaultValue="" error={errors.profileImg} />
                <button type="submit">Enviar</button>
            </form>
        </>
    )
}