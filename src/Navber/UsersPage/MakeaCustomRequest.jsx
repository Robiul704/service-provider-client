import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../Axios/UseAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../Security/AuthProvider";
import { Helmet } from "react-helmet-async";


const MakeaCustomRequest = () => {
  const AxiosPublic=UseAxiosPublic()
  const {user}=useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit= (data) => {
        const AssetName=data.assetname
        const Price=data.price
        const AssetImage=data.assetimage
        const email=user?.email
        const name=user?.displayName
        const AssetType=data.assettype
        const WhyYouNeedThis=data.whyyouneedthis
        const Dates=new Date()
        
        const AdditionalInformation=data.additionalinformation
        const Status='pending'
        const info={AssetName,Status,Dates,name,email,WhyYouNeedThis,Price,AssetImage,AdditionalInformation,AssetType}
        console.log(info)
        AxiosPublic.post('/makerequest',info)
        .then(res=>{
          console.log(res.data)
        })
        AxiosPublic.post('/allRequest',info)
        .then(res=>{
          console.log(res.data)
        })



      }

    return (
        <div>
            <div className="m-10  ">
            <Helmet>
        <title>Service | Make Custom</title>
      </Helmet>
        <h1 className="text-3xl font-bold">Make a custom request</h1>
       <form onSubmit={handleSubmit(onSubmit)}>
       <div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text text-xl font-semibold">Asset Name</span>
</label>
<input {...register('assetname',{ required: true })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
{errors.assetname && <p>Asset Name is required.</p>}
<label className="label">
<span className="label-text text-xl font-semibold">Price</span>
</label>
<input {...register('price',{ required: true })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
{errors.price && <p>price is required.</p>}
<label className="label">
<span className="label-text text-xl font-semibold">Asset Image</span>
</label>
<input {...register('assetimage',{ required: true })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
{errors.companylogo && <p>Image is required.</p>}

<span className="label-text text-xl font-semibold my-3"> Select an Asset type</span>
<select {...register('assettype',{ required: true })} className="select select-bordered w-full max-w-xs">
  <option disabled defaultValue={'Select a type'}>Select a type</option>
  <option>Returnable</option>
  <option> Non-returnable </option>
</select>
{errors.assettype && <p>Asset Type is required.</p>}
<label className="label">
</label>
<label className="label">
<span className="label-text text-xl font-semibold">Why you need this</span>
</label>
<input {...register('whyyouneedthis',{ required: true })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
{errors.whyyouneedthis && <p> gap is required.</p>}
<label className="label">
</label>
<label className="label">
<span className="label-text text-xl font-semibold"> Additional information</span>
</label>
<input {...register('additionalinformation',{ required: true })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
{errors.additionalinformation && <p>Info is required.</p>}
<label className="label">
</label>
<button className="btn btn-outline w-2/4 text-black  bg-yellow-200 hover:bg-blue-400 text-xl font-bold ">Request</button>
</div>
       </form>
    </div>
        </div>
    );
};

export default MakeaCustomRequest;