
import UseAxiosSecure from "./UseAxiosSecure";

import { useQuery } from "@tanstack/react-query";


const UseEmployee = () => {
    const axiosSecure=UseAxiosSecure()
    const { refetch, data: Employee=[]}=useQuery({
        queryKey:['Employee'],
        queryFn: async () => {
            const res=await axiosSecure.get(`/Employee`)
            return res.data
        }
    })
        
        return [Employee,refetch]
};

export default UseEmployee;