import { Link } from "react-router-dom"
import { LoginForm } from "../../components/LoginForm"

export const LoginPage = () =>{
    return (
        <div className="loginContainer">
          <LoginForm />
          <Link to="/register">Cadastre-se</Link>
        </div>
      )
}