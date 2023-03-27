import { useContext } from "react";
import { IContacts } from "../../../interfaces/userInterfaces";
import { ContactsContext } from "../../../providers/ContactsContext";

export const ContactsList = ({ contact }: any) => {
  const {
    isEditContactModalVisible,
    setEditContactModalVisible,
    setClickedContact,
  } = useContext(ContactsContext);
  const openModal = (contact: IContacts) => {
    setEditContactModalVisible(!isEditContactModalVisible);
    setClickedContact({ ...contact });
  };
  return (
    <li onClick={() => openModal(contact)} role="button">
      <img src={contact.profileImg} alt={contact.fullName} />
      <div>
        <h3>{contact.fullName}</h3>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
      </div>
    </li>
  );
};
