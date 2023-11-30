import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../Axios/UseAxiosSecure";
import { Helmet } from "react-helmet-async";


const AddanAsset = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const axiosSecure=UseAxiosSecure()

      const onSubmit= (data) => {
        const ProductName=data.name
        const ProductType=data.product
        const ProductQuantity=data.quantity
        const date= new Date()
       
        const info={ProductName,ProductType,ProductQuantity,date}
        console.log(info)
        axiosSecure.post('/Asset',info)
        .then(res=>{
          console.log(res.data)
          Swal.fire({
            title: "Asset Add!",
            text: "Your Asset has been Added.",
            icon: "success"
          });
        })
      }
    return (
        <div className=" my-5 px-10">
          <Helmet>
        <title>Service | Add An Asset</title>
      </Helmet>
        <h1 className="text-3xl font-bold">Add an Asset To Fill up The Form</h1>
       <form onSubmit={handleSubmit(onSubmit)}>
       <div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text text-xl font-semibold">Product Name</span>
</label>
<input {...register('name',{ required: true })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
{errors.name && <p>Full Name is required.</p>}
<span className="label-text text-xl font-semibold my-3">Product Type</span>
<select {...register('product',{ required: true })} className="select select-bordered w-full max-w-xs">
  <option disabled selected>Select a product type</option>
  <option>Returnable</option>
  <option>Non-returnable</option>
</select>
{errors.product && <p>type is required.</p>}
<label className="label">
</label>
<label className="label">
<span className="label-text text-xl font-semibold">Product Quantity</span>
</label>
<input {...register('quantity',{ required: true })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
{errors.quantity && <p>quantity  is required.</p>}

<button className="btn btn-outline w-2/4 my-3  bg-blue-800 hover:bg-blue-400 text-xl font-bold text-white">Add</button>
</div>
       </form>
    </div>
    );
};

export default AddanAsset;