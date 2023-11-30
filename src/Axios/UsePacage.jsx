import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";


const UsePacage = () => {
    const axiosSecure=UseAxiosSecure()
    const { refetch, data: pacage=[]}=useQuery({
        queryKey:['pacage'],
        queryFn: async () => {
            const res=await axiosSecure.get(`/pacage`)
            return res.data
        }
    })
        console.log(pacage)
        return [pacage,refetch]
};

export default UsePacage;