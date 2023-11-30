
import UseAsset from "../../Axios/UseAsset";
import { useContext } from "react";
import { AuthContext } from "../../Security/AuthProvider";
import { Form } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../Axios/UseAxiosSecure";
import { Helmet } from "react-helmet-async";


const AssetList = () => {
  const axiosSecure=UseAxiosSecure()
    const [asset,refetch]=UseAsset()
        console.log(asset)
        const {loading}=useContext(AuthContext)
       const habndlesearch=(e)=>{
        e.preventDefault()
        const title=e.target.title.value;
        const filter=asset.filter(blog=>blog.ProductName===title)
          if(filter){
            refetch()
     
        }
        e.target.reset()
       }


       const handlefilter=(e)=>{
        e.preventDefault()
        const category=e.target.select.value;
        const filter=asset.filter(ass=>ass.ProductType===category)
        console.log(filter)
      
       }
       if(loading){
        return <p>loading.....</p>
       }

       const handledelete=(id)=>{
        Swal.fire({
          title: "Are you sure?",
          text: "You want to Delete this Asset!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Remove Employee"
        }).then(res=>{
          console.log(res)
          if (res.isConfirmed) {
            axiosSecure.delete(`/Asset/${id}`)
            .then(res=>{
              console.log(res.data)
              refetch()
              if(res.data.deletedCount>0){
                  Swal.fire({
                      title: "Delete!",
                      text: "Your asset has been Remove.",
                      icon: "success"
                    });
              }
          }) 
  
          }
        })
     
      }
       
    return (
        <div>
            <div>
            <Helmet>
        <title>Service | Asset List</title>
      </Helmet>
            <div className="my-10 text-center bg-lime-100 py-5 px-5">
            <h1 className="text-4xl my-5 font-bold"> search items by it’s names.</h1>
         <Form onSubmit={habndlesearch}>
         
         <input name="title" className=" bg-amber-300 py-3 px-3 rounded-l-xl" type="text" placeholder="search by items name " />
            <button className=" px-4 rounded-r-xl py-3 bg-blue-500">Search</button>
         </Form>
                <h1 className="text-5xl font-bold text-center underline my-5">filter items by request</h1>
      
                <Form  onSubmit={handlefilter} className="my-5">
                <select name="select" className="select select-primary w-36 max-w-xs">
  <option disabled selected>All</option>
  <option>Pending</option>
  <option>Aproved</option>
  <option>Returnable</option>
  <option>Non-returnable</option>
</select>
                <button className=" px-4 rounded-r-xl py-3 bg-blue-500">Filter</button>
                </Form>
        
        </div>



           <div className="overflow-x-auto">
  <table className="table">
    <thead>
    <tr className="text-xl font-bold bg-blue-300">
        <th>Serial</th>
        <th>Name</th>
         <th>Type</th>
         <th>Quantity</th>
         <th>Date Added</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody className="">
      {
        asset.map((ass,i)=><tr key={ass._id} className="text-xl bg-red-300 font-bold ">
         <th>{i+1}</th>
    <td><p>{ass.ProductName}</p></td>
    <td><p>{ass.ProductType}</p></td>
    <td><p> {ass.ProductQuantity}</p></td>
    <td><p> Date: {ass.date}</p></td>
     <td><button className="btn btn-secondary">Update</button></td>
     <td><button onClick={()=>handledelete(ass._id)}  className="btn btn-secondary">Delete</button></td>
      </tr>)
      }
    </tbody>
  </table>
</div>
</div>

        </div>
      
    );
};

export default AssetList;