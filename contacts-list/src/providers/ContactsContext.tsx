import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IContactContext } from "../interfaces/contextsInterfaces";
import { IdefaultProviderProps } from "../interfaces/reactDefaultInterfaces";
import { IContacts } from "../interfaces/userInterfaces";
import { Api } from "../services/api";
import { UserContext } from "./UserContext";

export const ContactsContext = createContext({} as IContactContext);

export const ContactsProvider = ({ children }: IdefaultProviderProps) => {
  const [isAddContactModalVisible, setAddContactModalVisible] = useState(false);
  const [isEditContactModalVisible, setEditContactModalVisible] = useState(false);
  const [editedContact, setEditedcontact] = useState<IContacts | null>(null);
  const [clickedContact, setClickedContact] = useState<IContacts | null>(null);
  const { contacts, setContacts, token } = useContext(UserContext);

  const addContacts = async (data: IContacts) => {
    try {
      const contactResponse = await Api.post("/contacts", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setContacts([...contacts, contactResponse.data]);
      console.log(contactResponse.data);

      toast.success("Contato adicionado com sucesso");
      setAddContactModalVisible(false);
    } catch (error) {
      console.log(error);
      toast.error("Contato já adicionado");
    }
  };

  const editContacts = async (data: IContacts, id: string) => {
    try {
      const editContactResponse = await Api.patch(`/contacts/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setEditedcontact(editContactResponse.data);
      toast.success("Contato editado com sucesso.");
      setEditContactModalVisible(!isEditContactModalVisible);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (editedContact) {
      const updated = contacts.map((contact) =>
        contact.id === editedContact.id ?
        editedContact : contact
      );

      setContacts(updated);
    }
  }, [editedContact]);

  const deleteContacts = async (id: string) => {
    try {
      await Api.delete(`/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Contato deletado com sucesso.");
      const newContacts = contacts.filter((contact) => contact.id !== id);
      setContacts(newContacts);
      setEditContactModalVisible(!isEditContactModalVisible);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ContactsContext.Provider
      value={{
        clickedContact,
        setClickedContact,
        addContacts,
        editContacts,
        deleteContacts,
        isAddContactModalVisible,
        setAddContactModalVisible,
        isEditContactModalVisible,
        setEditContactModalVisible,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
