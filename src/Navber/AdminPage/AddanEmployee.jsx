import { useState } from "react";
import UseAxiosSecure from "../../Axios/UseAxiosSecure";
import UseEmployee from "../../Axios/UseEmployee";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
// import UseTeam from "../../Axios/UseTeam";
// import UseAsset from "../../Axios/UseAsset";

const AddanEmployee = () => {
    const [Employee,refetch]=UseEmployee()
    
  
    // const  [asset,refetch]=UseAsset()
    const [data,setdata]=useState()
    console.log(data)
    const axiosSecure=UseAxiosSecure()
    // const [Team,refetch]=UseTeam()
    const handleadd=(email)=>{
       
        axiosSecure.get(`/Employee/${email}`)
        .then(res=>{
            console.log(res.data)
            setdata(res.data)
            const emails=res.data.email
            const photoURL=res.data.photoURL
            const displayName=res.data.displayName
            const dateOfBirth=res.data.dateOfBirth
            const type=res.data.type
            const myteam='myteam'
            const info={emails,photoURL,displayName,myteam,dateOfBirth,type}
            console.log(info)
            axiosSecure.post('/team',info)
            .then(res=>{
              Swal.fire({
                title: "Added!",
                text: "This Employee has been added.",
                icon: "success"
              });
              console.log(res.data)
              refetch()
            })
        })

     
    }
 
   


    return (
        <div>
          <Helmet>
        <title>Service | Add An Employee</title>
      </Helmet>
           <div>
           
        <div>
          <h1 className="text-3xl font-bold bg-yellow-400 text-black py-5">Product Limit:24</h1>
          <h1 className="text-3xl font-bold bg-yellow-400 text-black py-5">Package limit:{30-Employee.length} <Link to={'/package'}><button  className="btn">Increase the limit</button></Link></h1>
          
        </div>
        </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="bg-teal-200">
      <tr>
        <th>
         <h1>Chaick Box</h1>
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Type</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody className="bg-red-200">
     
     {
        Employee.map(em=> <tr  key={em._id}>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <img className="h-20 w-20" src={em.photoURL} alt="" />
              </div>
            </td>
            <td>
             <h1>{em.displayName}</h1>
            </td>
            <td>{em.type}</td>
            <th>
              <button onClick={()=>handleadd(em.email)} className="btn btn-outline bg-blue-300 font-bold py-6 text-center  px-2 btn-xs">Add to the team</button>
            </th>
          </tr>)
     }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AddanEmployee;