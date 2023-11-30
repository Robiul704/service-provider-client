import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import { AuthContext } from "../Security/AuthProvider";



const UseAdmin = () => {
    const axiosSecure=UseAxiosSecure()
    const {user}=useContext(AuthContext)
    const {data:isAdmin,isPending:isAdminLoading,}=useQuery({
        queryKey:[user?.email,'isAdmin'],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/user/admin/${user.email}`)
            console.log(res.data.admin)
            return res.data?.admin
        }
    })
    return [isAdmin,isAdminLoading]
};

export default UseAdmin;