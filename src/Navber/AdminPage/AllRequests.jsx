
import { Form } from "react-router-dom";

import UseAxiosSecure from "../../Axios/UseAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import UseAllRequests from "../../Axios/UseAllRequests";


const AllRequests = () => {
  const axiosSecure=UseAxiosSecure()
  caches

    const [allRequests,refetch]=UseAllRequests()
    
    const handleSearch=(e)=>{
      console.log(e)
        // e.preventDefault()
        // const search=e.target.title.value
        // const [allRequest,refetch]=UseAllRequest()
        // const filter=allRequest.filter(all=>all.email===search)
        // if(filter){
        //   setallrequest(filter)
        // }
        // else{
        //   setallrequest(allRequest)
        // }
       
        // console.log(search)
    }
    

    const handleReject=(id)=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You want to reject this Employee!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Reject Employee"
      })
      .then(res=>{
        console.log(res.data)
        axiosSecure.delete(`/allRequest/${id}`)
        .then(res=>{
          console.log(res.data)
          refetch()
          if(res.data.deletedCount>0){
              Swal.fire({
                  title: "Reject!",
                  text: "Your file has been Rejected.",
                  icon: "success"
                });
          }
      }) 
      })
    
  }

    const handleApproved=(id)=>{
      axiosSecure.patch(`/allRequest/${id}`)
      .then(res=>{
          console.log(res.data)
          Swal.fire({
            title: "Approved!",
            text: "Asset has been Approved.",
            icon: "success"
          });
          refetch()
      })
      axiosSecure.delete(`/allRequest/${id}`)
      .then(res=>{
          console.log(res.data)
          refetch()
      })
  }
  
    return (
        <div className="text-center  mx-auto">
          <Helmet>
        <title>Service | All Request</title>
      </Helmet>
          <div>
          <h1 className="text-4xl my-5 font-bold">Search by name or email</h1>
                 <Form onSubmit={handleSearch}>
                  <input name="title" className=" bg-amber-300 py-3 px-3 rounded-l-xl" type="text" placeholder="search by title " />
                 <button className=" px-4 rounded-r-xl py-3 bg-blue-500">Search</button>
                 </Form>
          </div>
          <div className="grid gap-5 m-5 md:grid-cols-3 lg:grid-cols-3">
        {
          allRequests.length===0 && <h1>There is no Request found</h1>
        }
        {
            allRequests.map(all=>  <div key={all._id} className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Asset Name:{all.AssetName} </h2>
              <h2 className="card-title">Email of requester : {all.email} </h2>
              <h2 className="card-title">Name of requester : {all.name}</h2>
              <h2 className="card-title">Request Date :{all.date} </h2>
              <h2 className="card-title">Status: {all.Status} </h2>
              <h2 className="card-title">Additional note: {all.AdditionalInformation}</h2>
              <div className="card-actions justify-end">
                <button  onClick={()=>handleApproved(all._id)} className="btn btn-primary">Approve</button>
                <button onClick={()=>handleReject(all._id)} className="btn btn-ghost">Reject</button>
              </div>
            </div>
          </div>)
        }
          </div>
        </div>
    );
};

export default AllRequests;
// Asset Name
// ● Asset Type
// ● Email of requester
// ● Name of requester
// ● Request Date
// ● Additional note
// ● Status
// ● Approve Button
// ● Reject Butt