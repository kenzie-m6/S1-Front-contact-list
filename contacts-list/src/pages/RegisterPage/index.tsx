import { Link } from "react-router-dom"
import { RegisterForm } from "../../components/RegisterForm"

export const RegisterPage = () => {
    return (
        <div>
          <Link to="/">Voltar</Link>
          <RegisterForm />
        </div>
      )
}