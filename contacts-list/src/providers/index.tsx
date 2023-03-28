import { ContactsProvider } from "./ContactsContext";
import { UserProvider } from "./UserContext";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return (

      <UserProvider>
        <ContactsProvider>
              {children}
        </ContactsProvider>
      </UserProvider>

  );
};

export default Providers;