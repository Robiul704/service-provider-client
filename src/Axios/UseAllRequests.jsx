import { useContext } from "react";
import UseAxiosSecure from "./UseAxiosSecure";
import { AuthContext } from "../Security/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const UseAllRequests = () => {
    const axiosSecure=UseAxiosSecure()
    const {user}=useContext(AuthContext)
    const { refetch, data:allRequests=[]}=useQuery({
        queryKey:['allRequests',user?.email],
        queryFn: async () => {
            const res=await axiosSecure.get(`/allRequests`)
            return res.data
        }
    })
        console.log(allRequests)
        return [allRequests,refetch]
};

export default UseAllRequests;