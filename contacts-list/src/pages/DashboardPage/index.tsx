import { useContext, useEffect } from "react";
import { Contacts } from "../../components/ContactsContainer";
import { EditUserForm } from "../../components/EditUserForm";
import { UserContext } from "../../providers/UserContext";
import { Header } from "./Header";

export const DashBoardPage = () =>{
    const {user, isEditUserModalVisible, profile} = useContext(UserContext)

  useEffect(() =>{
    profile()
  }, [])

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
