import axios from "axios";

const axiosPublic=axios.create({
    baseURL:'https://service-provider-server-flame.vercel.app'
})
const UseAxiosPublic = () => {
    return axiosPublic
};

export default UseAxiosPublic;