import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Security/AuthProvider";


const UseAllRequest = () => {
    const axiosSecure=UseAxiosSecure()
    const {user}=useContext(AuthContext)
    const { refetch, data:allRequest=[]}=useQuery({
        queryKey:['allRequest',user?.email],
        queryFn: async () => {
            const res=await axiosSecure.get(`/allRequest?email=${user.email}`)
            return res.data
        }
    })
        console.log(allRequest)
        return [allRequest,refetch]
};

export default UseAllRequest;