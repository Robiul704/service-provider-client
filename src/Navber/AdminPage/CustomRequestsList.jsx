
import Swal from "sweetalert2";
import UseAxiosSecure from "../../Axios/UseAxiosSecure";
import UseCustomRequest from "../../Axios/UseCustomRequest";
import { Helmet } from "react-helmet-async";


const CustomRequestsList = () => {
    const [makerequests,refetch]=UseCustomRequest()
    const axiosSecure=UseAxiosSecure()
    const handleReject=(id)=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You want to Reject this Asset!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Reject Asset"
      }).then(res=>{
        console.log(res)
        if (res.isConfirmed) {
          axiosSecure.delete(`/makerequests/${id}`)
          .then(res=>{
            console.log(res.data)
            refetch()
            if(res.data.deletedCount>0){
                Swal.fire({
                    title: "Reject!",
                    text: "This Asset has been Reject.",
                    icon: "success"
                  });
            }
        }) 

        }
      })
        
        .then(res=>{
            console.log(res.data)
            refetch()
        })
    }
    const handleApproved=(id)=>{
        axiosSecure.patch(`/makerequests/${id}`)
        .then(res=>{
            console.log(res.data)
            Swal.fire({
              title: "Approved!",
              text: "This Asset has been Approved.",
              icon: "success"
            });
            refetch()
        })
        axiosSecure.delete(`/makerequests/${id}`)
        .then(res=>{
            console.log(res.data)
            refetch()
        })
    }
    
   
    return (
        <div>
            <Helmet>
        <title>Service | Request List</title>
      </Helmet>
           <div className="mx-auto my-10 container">
          <div className="grid items-center justify-center gap-5 md:grid-cols-2 lg:grid-cols-3">
          {
            makerequests.map(make=><div key={make._id} className="card card-compact m-10 bg-blue-100 shadow-xl">
            <figure><img className="h-full" src={make.AssetImage} alt="" /></figure>
            <div className="card-body">
              <h2 className="card-title">Asset Name: {make.AssetName}</h2>
              <h2 className="card-title">Price : ${make.Price}</h2>
              <p> Type: {make.AssetType}
          </p>
              <p> {make.WhyYouNeedThis}
          </p>
              <p> {make.AdditionalInformation}
          </p>
              <div className="card-actions justify-end">
              <button onClick={()=>handleReject(make._id)} className="btn btn-secondary">Reject</button>
                <button onClick={()=>handleApproved(make._id)} className="btn btn-secondary">Approve</button>
              </div>
            </div>
          </div>)
           }
          </div>
        </div>
        </div>
    );
};

export default CustomRequestsList;