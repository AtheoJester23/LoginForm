import type { ReactNode } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { isTokenExpired } from "../utils/checkTokenExp";

const ProtectedRoute = ({children}: {children: ReactNode}) => {
    const token = localStorage.getItem("token")
    const navigate = useNavigate();

    if(!token){
        return <Navigate to="/" replace />;
    }

    if(isTokenExpired(token)){
        localStorage.removeItem("token");
        return null;
    }
        
    return children;
}
 
export default ProtectedRoute;