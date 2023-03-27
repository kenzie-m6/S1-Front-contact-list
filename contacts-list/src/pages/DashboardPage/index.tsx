import { useContext } from "react"
import { Contacts } from "../../components/ContactsContainer"
import { ContactsProvider } from "../../providers/ContactsContext"
import { UserContext } from "../../providers/UserContext"

export const DashBoardPage = () =>{
    const {user} = useContext(UserContext)

    return (
        <>
            <div>
                <h2>Olá, {user?.fullName}</h2>
                <p>Seu e-mail: {user?.email}</p>
                <p>Seu Telefone: {user?.phone}</p>
            </div>
            <ContactsProvider>
                <Contacts/>
            </ContactsProvider>
        </>
    )
}