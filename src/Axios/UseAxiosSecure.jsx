import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Security/AuthProvider";

const axiosSecure=axios.create({
    baseURL:'https://service-provider-server-flame.vercel.app'
})
const UseAxiosSecure = () => {
  const {signout}=useContext(AuthContext)
  const navigate=useNavigate()

  //request
  axiosSecure.interceptors.request.use((config)=>{
      return config
  }, function (error) {
      return Promise.reject(error);
    });
    //response
    axiosSecure.interceptors.response.use((response)=>{
      return response
    },async (error)=>{
      const status=error.response.status
      if(status=== 401 || status===403){
         await signout()
          navigate('/login')
      }
      return Promise.reject(error);
    })
  return axiosSecure
};
export default UseAxiosSecure;