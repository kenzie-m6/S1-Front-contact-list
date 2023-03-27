import { useContext } from "react"
import { IUser } from "../../../interfaces/userInterfaces";
import { UserContext } from "../../../providers/UserContext"


export const Header = () => {
const {user, userLogout, userEditProfile, setEditUserModalVisible, isEditUserModalVisible} = useContext(UserContext)
const openModal = (user: IUser) => {
    setEditUserModalVisible(!isEditUserModalVisible);
  };
    return(
        <header>
            <div>
            <img src={user.profileImg ? user.profileImg: ""} alt={user.fullName} />
            <h2>Bem vindo a sua lista de contatos, {user.fullName}</h2>
            </div>
            <button onClick={()=> openModal(user)}>Editar perfil</button>
            <button onClick={()=> userLogout()}>Logout</button>
        </header>
    )
}