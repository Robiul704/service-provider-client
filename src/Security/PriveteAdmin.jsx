import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import UseAdmin from "../Axios/UseAdmin";
import { Navigate } from "react-router-dom";


const PrivateAdmin = ({children}) => {
   const [isAdmin,isAdminLoading]=UseAdmin()
   const {user,loading}=useContext(AuthContext)
  
   if(isAdminLoading && loading){
    return <p></p>
   }
   if(user || isAdmin){
    return children
   }
   return <Navigate to={'/'} state={location.pathname}>
            
   </Navigate>
};

export default PrivateAdmin;