import { UserProvider } from "./providers/UserContext";
import { AppRoutes } from "./routes/routes";

export const App = () => {
  return (
    <div className="App">
      <UserProvider>
        <AppRoutes/>
      </UserProvider>
    </div>
  );
};
