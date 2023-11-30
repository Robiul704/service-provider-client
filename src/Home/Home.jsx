import { useContext } from "react";
import About from "./About";
import Banner from "./Banner";
import Pacages from "./Pacages";
import CustomRequest from "./UserHome/CustomRequest";
import { AuthContext } from "../Security/AuthProvider";
import { Helmet } from "react-helmet-async";


const Home = () => {
    const {user}=useContext(AuthContext)
   const IsAdmin=false
    return (
        <div className="container mx-auto">
              <Helmet>
        <title>Service | Home</title>
      </Helmet>
            <Banner></Banner>
            {
                !user&&  <div>
                <About></About>
            <Pacages></Pacages></div>
            }
           
            {
                user && !IsAdmin && <div>
                <CustomRequest></CustomRequest>
                </div>
            }
          
        </div>
    );
};

export default Home;