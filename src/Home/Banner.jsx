import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="min-h-[100px] ">
             <Carousel className="min-h-[100px]">
             <div >
             <div className="hero sm:min-h-[500px] md:min-h-[550px] lg:min-h-[650px]" style={{backgroundImage: 'url(https://i.ibb.co/SKMZDSd/IT-Service-1-1024x569.jpg)'}}>
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      
      
     <Link to={'/joinasemployee'}>
     <button className="btn btn-outline bg-red-600 hover:bg-blue-300 text-black  text-xl font-bold">Join as an Employee</button></Link>
    </div>
  </div>
</div>
                </div>
                <div className="hero  sm:min-h-[300px] md:min-h-[450px] lg:min-h-[650px]" style={{backgroundImage: 'url(https://i.ibb.co/Rcm2g4q/business-translation-1-3.jpg)'}}>
  <div className="hero-overlay bg-opacity-30 "></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <Link to={'/joinasadmin'}>
     <button className="btn btn-outline bg-red-600 hover:bg-blue-300 text-black  text-xl font-bold">Join as Admin</button></Link>
    </div>
  </div>
</div>
             </Carousel>
        </div>
    );
};

export default Banner;