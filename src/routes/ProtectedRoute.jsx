import { Navigate } from "react-router";

export const ProtectedRoute = ({ children }) => {
    const isLogin = JSON.parse(localStorage.getItem('isAuth') || false);

    return isLogin ? children : <Navigate to={'/'} />
}
