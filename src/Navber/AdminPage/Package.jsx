

import { Helmet } from "react-helmet-async";
import UsePacage from "../../Axios/UsePacage";
import { Link } from "react-router-dom";


const Package = () => {
  const [pacage]=UsePacage()
  
  
    
    return (
        <div className="grid gap-5 m-5 lg:grid-cols-3 md:grid-cols-2">
            <Helmet>
        <title>Service | pacage</title>
      </Helmet>
          {
            pacage.map(p=><div  key={p._id}>
              <div className="text-3xl font-bold text-white bg-gradient-to-r from-red-500 to-cyan-500 p-10 py-20">
            <h1 >{p.member}</h1>
            <span className="text-6xl">{p.price}</span>
            <br />
            <Link  to={`/payment/${p.member}`} ><button className="btn btn-outline bg-blue-400">Buy</button></Link>
            </div>
            </div>)
          }
             
        </div>
    );
};

export default Package;