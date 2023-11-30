import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../Axios/UseAxiosPublic";
import { AuthContext } from "../../Security/AuthProvider";
import Swal from "sweetalert2";


const Requ = ({ass,i}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const axiosPublic=UseAxiosPublic()
      const {user}=useContext(AuthContext)

      const onSubmit= (data) => {
       const AdditionalInformation=data.additional
        const Dates= new Date()
        
        const AssetName=ass.ProductName
        const email=user.email
        const name=user.name
        const Status='pending'
        const AssetType=ass.ProductType
       
        const info={AdditionalInformation,Dates,AssetName,email,name,Status, AssetType}
        console.log(info)
        axiosPublic.post(`/allRequest`,info)
        .then(res=>{
          Swal.fire("Request is confirmed successfully");
          console.log(res.data)
        })
      }
    

    const {ProductQuantity}=ass
    const [desable,setDesable]=useState(false)
    const [Available,setAvailable]=useState('Available')
    if(ProductQuantity<1){
        return setDesable(true)
    }
    if(ProductQuantity<1){
        return setAvailable('Out of stock')
    }
    return (


      <div className="card  bg-yellow-300 shadow-xl">
  <div className="card-body">
  <p>{ass.ProductName}</p>
  <p>{ass.ProductType} </p>
  <p> {Available}</p>
    <div className="card-actions justify-end">
    <div className="dropdown  dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1">Request</div>
  <div className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
  <label className="label">
</label>
 <label className="label">
 <span className="label-text text-xl font-semibold">Additional notes</span>
 </label>
  <input {...register('additional',{ required: true })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
{errors.additional && <p>quantity  is required.</p>}
 
 <div className="modal-action">
      <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
       <button disabled={desable} className="btn">Request</button>
     </form>
   </div>
  </div>
</div>
    </div>
  </div>
</div>
   
        
    );
};

export default Requ;

    