import { useContext, useEffect } from "react";
import { Contacts } from "../../components/ContactsContainer";
import { EditUserForm } from "../../components/EditUserForm";
import { ContactsContext, ContactsProvider } from "../../providers/ContactsContext";
import { UserContext } from "../../providers/UserContext";
import { Header } from "./Header";

export const DashBoardPage = () => {
  const { user, isEditUserModalVisible, profile } = useContext(UserContext);
  const { listContacts} = useContext(ContactsContext);

  useEffect(() => {
    profile();
    // listContacts();
  }, []);

  return (
    <>
      <Header />
      <div>
        <p>Seu e-mail: {user?.email}</p>
        <p>Seu Telefone: {user?.phone}</p>
      </div>
      {isEditUserModalVisible && <EditUserForm />}
        <Contacts />
    </>
  );
};
