export interface IUser {
    id: string;
    email: string;
    fullName: string;
    phone: string;
    secondaryEmail?: string | null | undefined;
    profileImg?: string | null | undefined;
    phoneSecondary?: string | null | undefined;
    contacts: IContacts[]
}
export interface IRegisterFormValues {
    email: string;
    fullName: string;
    password: string;
    phone: string;
    secondaryEmail?: string | null | undefined;
    profileImg?: string | null | undefined;
    phoneSecondary?: string | null | undefined;
}

export interface ILoginInput {
    email: string;
    password: string;
}

export interface IContacts {
    id: string;
    email: string;
    fullName: string;
    phone: string;
    secondaryEmail?: string | null | undefined;
    profileImg?: string | undefined;
    phoneSecondary?: string | null | undefined;
}