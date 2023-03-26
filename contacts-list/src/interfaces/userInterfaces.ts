export interface IUser {
    id: string;
    email: string;
    fullName: string;
    phone: string;
    secondaryEmail?: string | null | undefined;
    profileImg?: string | null | undefined;
    phoneSecondary?: string | null | undefined;
    contacts: string[]
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
    email: string;
    fullName: string;
    phone: string;
    secondaryEmail?: string | null | undefined;
    profileImg?: string | null | undefined;
    phoneSecondary?: string | null | undefined;
}