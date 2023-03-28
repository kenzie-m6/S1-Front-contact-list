import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { IContactContext } from "../interfaces/contextsInterfaces";
import { IdefaultProviderProps } from "../interfaces/reactDefaultInterfaces";
import { IContacts } from "../interfaces/userInterfaces";
import { Api } from "../services/api";


export const ContactsContext = createContext({} as IContactContext);

export const ContactsProvider = ({ children }: IdefaultProviderProps) => {
  const [isAddContactModalVisible, setAddContactModalVisible] = useState(false);
  const [isEditContactModalVisible, setEditContactModalVisible] = useState(false);
  const [clickedContact, setClickedContact] = useState<IContacts | null>(null);
  const [contacts, setContacts] = useState<IContacts[]>([]);
  
  const token = localStorage.getItem("@TOKEN");
  const addContacts = async (data: IContacts) => {
    try {
      const contactResponse = await Api.post("/contacts", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setContacts([...contacts, contactResponse.data]);

      toast.success("Contato adicionado com sucesso");
      setAddContactModalVisible(false);
    } catch (error) {
      console.log(error);
      toast.error("Contato já adicionado");
    }
  };

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

  const editContacts = async (data: IContacts, id: string) => {
    try {
      await Api.patch(`/contacts/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Contato editado com sucesso.");
      setEditContactModalVisible(!isEditContactModalVisible);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContacts = async (id: string) => {
    try {
      await Api.delete(`/contacts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
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
        contacts,
        setContacts,
        listContacts,
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
