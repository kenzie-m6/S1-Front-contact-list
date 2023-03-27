import { useContext } from "react";
import { IUser } from "../../../interfaces/userInterfaces";
import { UserContext } from "../../../providers/UserContext";
import { BsFiletypePdf } from "react-icons/bs";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Contacts } from "../../../components/ContactsContainer";
import { HeaderContainer } from "../../../styles/header";

export const Header = () => {
  const {
    user,
    userLogout,
    setEditUserModalVisible,
    isEditUserModalVisible,
  } = useContext(UserContext);
  const openModal = (user: IUser) => {
    setEditUserModalVisible(!isEditUserModalVisible);
  };
  return (
    <HeaderContainer>
      <div>
        <img src={user.profileImg ? user.profileImg : ""} alt={user.fullName} />
        <h2>Sua lista de contatos, {user.fullName}</h2>
      </div>

      <div className="ButtonsContainer">
        <PDFDownloadLink document={<Contacts />} fileName="contacts.pdf">
          Download PDF <BsFiletypePdf />
        </PDFDownloadLink>
        <button onClick={() => openModal(user)}>Editar perfil</button>
        <button onClick={() => userLogout()}>Logout</button>
      </div>
    </HeaderContainer>
  );
};
