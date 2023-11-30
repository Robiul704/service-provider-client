import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";


const UseAsset = () => {
    const axiosPublic=UseAxiosPublic()
    const { refetch, data: asset=[]}=useQuery({
        queryKey:['Asset'],
        queryFn: async () => {
            const res=await axiosPublic.get(`/Asset`)
            return res.data
        }
    })
        console.log(asset)
        return [asset,refetch]
};

export default UseAsset;