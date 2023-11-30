import { Outlet } from "react-router-dom";
import Navber from "./Navber/Navber";
import Footer from "./Home/Footer";


const Root = () => {
    return (
        <div className="container mx-auto">
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;