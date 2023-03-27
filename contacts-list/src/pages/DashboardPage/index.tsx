import { useContext } from "react"
import { Contacts } from "../../components/ContactsContainer"
import { EditUserForm } from "../../components/EditUserForm"
import { ContactsProvider } from "../../providers/ContactsContext"
import { UserContext } from "../../providers/UserContext"
import { Header } from "./Header"

export const DashBoardPage = () =>{
    const {user, isEditUserModalVisible} = useContext(UserContext)

    return (
        <>
        <Header/>
            <div>
                <p>Seu e-mail: {user?.email}</p>
                <p>Seu Telefone: {user?.phone}</p>
            </div>
            {isEditUserModalVisible && <EditUserForm/>}
            <ContactsProvider>
                <Contacts/>
            </ContactsProvider>
        </>
    )
}