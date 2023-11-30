import Swal from "sweetalert2";
import UseAxiosSecure from "../../Axios/UseAxiosSecure";
import UseTeam from "../../Axios/UseTeam";
import { Helmet } from "react-helmet-async";


const MyEmployeeList = () => {
    const  [Team,refetch]=UseTeam()
    const axiosSecure=UseAxiosSecure()
    const handleremoved=(id)=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You want to Remove this Employee!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Remove Employee"
      }).then(res=>{
        console.log(res)
        if (res.isConfirmed) {
          axiosSecure.delete(`/team/${id}`)
          .then(res=>{
            console.log(res.data)
            refetch()
            if(res.data.deletedCount>0){
                Swal.fire({
                    title: "Reject!",
                    text: "Your Employee has been Remove.",
                    icon: "success"
                  });
            }
        }) 

        }
      })
   

    }

    refetch()
    return (
        <div className="mx-auto my-10 container">
            <Helmet>
        <title>Service | My Employee</title>
      </Helmet>
          <div className="grid items-center justify-center gap-5 md:grid-cols-2 lg:grid-cols-3">
          {
            Team.map(t=><div key={t._id} className="card card-compact m-10 bg-blue-100 shadow-xl">
            <figure><img className="h-56 my-10 mx-5" src={t.photoURL} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Name of the member :{t.displayName}</h2>
              <p> Type: {t.type}
          </p>
              <div className="card-actions justify-end">
                <button onClick={()=>handleremoved(t._id)} className="btn btn-primary">Remove</button>
              </div>
            </div>
          </div>)
           }
          </div>
        </div>
    );
};

export default MyEmployeeList;