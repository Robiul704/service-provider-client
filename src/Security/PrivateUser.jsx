import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const PrivateUser = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    if(loading){
        return <p>A</p>
    }  
    if(user){
        return children
    }
    return (
        <Navigate to={'/login'} state={location.pathname}>
            
        </Navigate>
    );
};

export default PrivateUser;