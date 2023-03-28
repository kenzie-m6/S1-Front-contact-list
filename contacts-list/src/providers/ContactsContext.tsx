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
  const [isEditContactModalVisible, setEditContactModalVisible] =
    useState(false);
  const [clickedContact, setClickedContact] = useState<IContacts | null>(null);
  const { contacts, setContacts } = useContext(UserContext);

  const addContacts = async (data: IContacts) => {
    try {
      const contactResponse = await Api.post("/contacts", data);
      setContacts([...contacts, contactResponse.data]);
      console.log(contactResponse.data);

      toast.success("Contato adicionado com sucesso");
      setAddContactModalVisible(false);
    } catch (error) {
      console.log(error);
      toast.error("Contato já adicionado");
    }
  };

  useEffect(() => {
    const contactsList = async () => {
      const contacts = await Api.get("/contacts");
      setContacts(contacts.data);
    };
    contactsList();
  }, []);

  const editContacts = async (data: IContacts, id: string) => {
    try {
      await Api.patch(`/contacts/${id}`, data);
      toast.success("Contato editado com sucesso.");
      setEditContactModalVisible(!isEditContactModalVisible);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContacts = async (id: string) => {
    try {
      await Api.delete(`/contacts/${id}`);
      toast.success("Contato deletado com sucesso.");
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
