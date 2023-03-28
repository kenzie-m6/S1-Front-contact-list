import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Providers from "./providers";
import { AppRoutes } from "./routes/routes";

export const App = () => {
  return (
    <div className="App">
      <Providers>
        <AppRoutes />
        <ToastContainer position="top-center" autoClose={1500} />
      </Providers>
    </div>
  );
};
