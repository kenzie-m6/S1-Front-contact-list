import { useContext } from "react";
import { ContactsContext } from "../../providers/ContactsContext";
import { UserContext } from "../../providers/UserContext";
import { AddContactForm } from "../AddContactModalForm";
import { EditContactForm } from "../EditContactModalForm";
import { ContactsList } from "./ContactsList";

export const Contacts = () => {
  const { isAddContactModalVisible, setAddContactModalVisible, isEditContactModalVisible, setEditContactModalVisible } =
    useContext(ContactsContext);
  const { contacts} = useContext(UserContext);
  return (
    <>
      <h2>Adicionando um contato</h2>
      <button onClick={() => setAddContactModalVisible(!isAddContactModalVisible)}>
        +
      </button>
      {contacts!.length ? 
      (
        <ul>
            {contacts.map(contact => <ContactsList key={contact.id} contact={contact}/>)}
        </ul>
      ):(
        <span>Ainda não há contatos cadastrados</span>
      )}
      {isAddContactModalVisible && <AddContactForm/>}
      {isEditContactModalVisible && <EditContactForm/>}
    </>
  );
};
