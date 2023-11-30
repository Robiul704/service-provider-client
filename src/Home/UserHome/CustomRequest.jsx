
import UseCustom from "../../Axios/UseCustom";
import { Link } from "react-router-dom";

const CustomRequest = () => {
    const [makerequest]=UseCustom()
    console.log(makerequest)
   
  
    return (
        <div>
          
            <h1 className="text-5xl font-bold text-center my-5">My Custom Requests</h1>
            <div className="overflow-x-auto">
  <table className="table">
    <thead>
    <tr className="text-xl font-bold bg-blue-200">
        <th>Serial</th>
        <th>Name</th>
         <th>Price</th>
         <th>Type</th>
        <th>Status</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      {
        makerequest.map((make,i)=><tr key={make._id} className="text-xl font-bold bg-base-200">
         <th>{i+1}</th>
    <td>{make.AssetName}</td>
    <td>${make.Price}</td>
    <td>{make.AssetType}</td>
     <td>{make.Status}......</td>
     <td>
<button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>Details</button>
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
<div className="space-y-3">
<h1>Asset Name:  {make.AssetName}</h1>
<hr />
   <h1> Price : {make.Price}</h1>
   <hr />
   <h1>Asset Type: {make.AssetType}</h1>
   <hr />
   <h1> {make.AssetImage}</h1>
   <hr />
   <h1>Need For: {make.WhyYouNeedThis}</h1>
   <hr />
   <h1>Info: {make.AdditionalInformation}</h1>
   <hr />
   <h1>Status: Active</h1>
</div>
    
    <div className="modal-action">
      <form method="dialog">
        <Link><button  className="btn">Update</button></Link>
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
     </td>
      </tr>)
      }
    </tbody>
  </table>
</div>



<h1 className="text-5xl font-bold text-center my-5">My Pending Requests</h1>
<h1 className="text-5xl font-bold text-center my-5">My monthly Requests</h1>



 </div>
    );
};

export default CustomRequest;