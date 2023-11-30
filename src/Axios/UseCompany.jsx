import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";


const UseCompany = () => {
    const axiosSecure=UseAxiosSecure()
    const { refetch, data:company=[]}=useQuery({
        queryKey:['company'],
        queryFn: async () => {
            const res=await axiosSecure.get(`/company`)
            return res.data
        }
    })
       
        return [company,refetch]
};

export default UseCompany;