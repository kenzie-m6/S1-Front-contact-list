import { IContacts, ILoginInput, IRegisterFormValues, IUser } from "./userInterfaces";

export interface IUserContext {
    user: IUser;
    token: string | null;
    contacts: IContacts[];
    setContacts:React.Dispatch<React.SetStateAction<IContacts[]>>;
    onLogin: (data: ILoginInput) => Promise<void>;
    profile: () => Promise<void>;
    userLogout: () => Promise<void>;
    userRegister: (formData: IRegisterFormValues) => Promise<void>;
    userEditProfile: (formData: IRegisterFormValues) => Promise<void>;
    deleteUser: () => Promise<void>;
    isEditUserModalVisible: boolean;
    setEditUserModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
  export interface IContactContext {
    addContacts: (data: IContacts) => Promise<void>;
    editContacts: (data: IContacts, id: string) => Promise<void>;
    deleteContacts: (id: string) => Promise<void>;
    isAddContactModalVisible: boolean;
    setAddContactModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    isEditContactModalVisible: boolean;
    setEditContactModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    clickedContact: IContacts | null;
    setClickedContact: React.Dispatch<React.SetStateAction<IContacts | null>>;
  }