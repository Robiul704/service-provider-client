import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";


const UseTeam = () => {
    const axiosPublic=UseAxiosPublic()
    const { refetch, data: Team=[]}=useQuery({
        queryKey:['Team'],
        queryFn: async () => {
            const res=await axiosPublic.get(`/Team`)
            return res.data
        }
    })
        console.log(Team)
        return [Team,refetch]
};

export default UseTeam;