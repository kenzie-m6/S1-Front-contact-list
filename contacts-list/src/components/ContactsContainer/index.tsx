import { useContext, useEffect } from "react";
import { ContactsContext } from "../../providers/ContactsContext";
import { UserContext } from "../../providers/UserContext";
import { AddContactForm } from "../AddContactModalForm";
import { EditContactForm } from "../EditContactModalForm";
import { ContactsList } from "./ContactsList";
import { Document, Page } from "@react-pdf/renderer";
import { Api } from "../../services/api";

export const Contacts = () => {
  const {
    isAddContactModalVisible,
    setAddContactModalVisible,
    isEditContactModalVisible,
  } = useContext(ContactsContext);
  const {    contacts,
    setContacts,} = useContext(UserContext)
const token = localStorage.getItem("@TOKEN")
  useEffect(() => {
    const listContacts = async () => {
      try {
        const contacts = await Api.get("/users/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setContacts(contacts.data.contacts);
      } catch (error) {
        console.log(error);
      }
    };
    listContacts();
  }, []);

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
