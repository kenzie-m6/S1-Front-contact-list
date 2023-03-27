import { useContext } from "react";
import { ContactsContext } from "../../providers/ContactsContext";
import { UserContext } from "../../providers/UserContext";
import { AddContactForm } from "../AddContactModalForm";
import { EditContactForm } from "../EditContactModalForm";
import { ContactsList } from "./ContactsList";
import { Document, Page } from "@react-pdf/renderer";

export const Contacts = () => {
  const {
    isAddContactModalVisible,
    setAddContactModalVisible,
    isEditContactModalVisible,
  } = useContext(ContactsContext);
  const { contacts } = useContext(UserContext);
  return (
    <>
      <h2>Adicionando um contato</h2>
      <button
        onClick={() => setAddContactModalVisible(!isAddContactModalVisible)}
      >
        +
      </button>
      {contacts?.length ? (
        <Document>
          <Page>
            <ul>
              {contacts.map((contact) => (
                <ContactsList key={contact.id} contact={contact} />
              ))}
            </ul>
          </Page>
        </Document>
      ) : (
        <span>Ainda não há contatos cadastrados</span>
      )}
      {isAddContactModalVisible && <AddContactForm />}
      {isEditContactModalVisible && <EditContactForm />}
    </>
  );
};
