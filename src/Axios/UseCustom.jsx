
import { useContext } from "react";
import UseAxiosSecure from "./UseAxiosSecure";

import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Security/AuthProvider";


const UseCustom = () => {
    const axiosSecure=UseAxiosSecure()
    const { user }=useContext(AuthContext)
const { refetch, data: makerequest=[]}=useQuery({
    queryKey:['makerequest',user?.email],
    queryFn: async () => {
        const res=await axiosSecure.get(`/makerequest?email=${user.email}`)
        return res.data
    }
})
    
    return [makerequest,refetch]

};

export default UseCustom;