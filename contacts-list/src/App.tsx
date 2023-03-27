import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from "./providers/UserContext";
import { AppRoutes } from "./routes/routes";

export const App = () => {
  return (
    <div className="App">
      <UserProvider>
        <AppRoutes/>
      </UserProvider>
      <ToastContainer position="top-center" autoClose={1500} />
    </div>
  );
};
