import { Route, Routes } from "react-router-dom"
import { DashBoardPage } from "../pages/DashboardPage"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"


export const AppRoutes = () =>{
    return (
        <Routes>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/dashboard" element={<DashBoardPage/>}/>
            <Route path="*" element={<LoginPage/>}/>
        </Routes>
    )
}