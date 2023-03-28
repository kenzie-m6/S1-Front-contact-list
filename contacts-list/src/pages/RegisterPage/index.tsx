import { Link } from "react-router-dom"
import { RegisterForm } from "../../components/RegisterForm"

export const RegisterPage = () => {
    return (
        <div className="registerContainer">
          <Link to="/">Voltar</Link>
          <RegisterForm />
        </div>
      )
}