import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";


const UseCustomRequest = () => {
    const axiosSecure=UseAxiosSecure()
const { refetch, data: makerequests=[]}=useQuery({
    queryKey:['makerequests'],
    queryFn: async () => {
        const res=await axiosSecure.get(`/makerequests`)
        return res.data
    }
})
    
    return [makerequests,refetch]
};

export default UseCustomRequest;