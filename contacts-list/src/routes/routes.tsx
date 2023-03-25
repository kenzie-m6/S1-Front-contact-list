import { Route, Routes } from "react-router-dom"
import { DashBoardPage } from "../pages/DashboardPage"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"

export const AppRoutes = () =>{
    return (
        <Routes>
            {/* <Route path="/" element={<LoginPage/>}/> */}
            <Route path="/register" element={<RegisterPage/>}/>
            {/* <Route path="/dashboard" element={<DashBoardPage/>}/> */}
        </Routes>
    )
}