import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContactsProvider } from "./providers/ContactsContext";
import { UserProvider } from "./providers/UserContext";
import { AppRoutes } from "./routes/routes";

export const App = () => {
  return (
    <div className="App">
      <UserProvider>
        <ContactsProvider>
          <AppRoutes />
        </ContactsProvider>
      </UserProvider>
      <ToastContainer position="top-center" autoClose={1500} />
    </div>
  );
};
