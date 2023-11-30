
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Security/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import UseAxiosPublic from '../Axios/UseAxiosPublic';
import { Helmet } from 'react-helmet-async';
const JoinasAdmin = () => {
  const { creatuser ,updateprofile }=useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
     const navigate=useNavigate()
     const location=useLocation()
     const axiosPublic=UseAxiosPublic()

      const onSubmit= (data) => {
        const displayName=data.name
        const companyname=data.companyname
        const photoURL=data.photoURL
        const companylogo=data.companylogo
        const packages=data.package
        const email=data.email
        const password=data.password
        const type='Admin'
        const dateOfBirth=data.date
        const info={displayName,email,type,companyname,photoURL,companylogo,password,dateOfBirth,packages}
        console.log(info)
        creatuser(data.email,data.password)
        .then(result=>{
            console.log(result)
          updateprofile(data.name,data.photoURL)
          .then(result=>{
            
            navigate(location?'/payment' : '/payment')
            console.log(result.data)
            axiosPublic.post('/company',info)
            .then(res=>console.log(res.data))
            }) 
          })
          .catch(error=>{
            console.log(error)
          })
      }
    return (
      <div>
         <Helmet>
        <title>Service | Join Admin</title>
      </Helmet>
      <div>
       <div style={{backgroundImage: 'url(https://i.ibb.co/Lz9b3Jy/desktop-wallpaper-top-windows-vista-mbr-hq-definition-live-1600x900.jpg)'}} className="hero  min-h-screen ">
<div className="hero-content px-10 flex-col  lg:flex-row-reverse">

<div className="card  hero-overlay bg-opacity-60 flex-shrink-0 w-full max-w-sm shadow-2xl bg-blue-300">
<h1 className="text-5xl font-bold text-center mt-5"> Join as Admin</h1>
<form className='px-16 py-5' onSubmit={handleSubmit(onSubmit)}>
 <div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text text-xl font-semibold"> Full Name</span>
</label>
<input {...register('name',{ required: true })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
{errors.name && <p>Full Name is required.</p>}
<label className="label">
<span className="label-text text-xl font-semibold">Company Name</span>
</label>
<input {...register('companyname',{ required: true })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
{errors.companyname && <p>Company Name is required.</p>}
<label className="label">
<span className="label-text text-xl font-semibold"> Company Logo</span>
</label>
<input {...register('companylogo',{ required: true })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
{errors.companylogo && <p>Company logo is required.</p>}

<span className="label-text text-xl font-semibold my-3"> Select a package</span>
<select {...register('package',{ required: true })} className="select select-bordered w-full max-w-xs">
<option disabled selected>Select a package</option>
<option> 5 Members for $5</option>
<option> 10 Members for $8</option>
<option> 20 Members for $15</option>
</select>
{errors.companylogo && <p>Package is required.</p>}
<label className="label">
</label>
<label className="label">
<span className="label-text text-xl font-semibold">Email</span>
</label>
<input {...register('email',{ required: true })} type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
{errors.email && <p>Email  is required.</p>}
<label className="label">
</label>
<label className="label">
<span className="label-text text-xl font-semibold"> Password</span>
</label>
<input {...register('password',{ required: true })} type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
{errors.password && <p>Password is required.</p>}
<label className="label">
            <span className="label-text text-xl font-semibold">PhotoURL</span>
          </label>
          <input {...register('photoURL',{ required: true })} type="text" name="photoURL" placeholder="photoURL" className="input input-bordered" />
          {errors.PhotoURL && <span className="text-red-900"> photoURL is required</span>}
<label className="label">
</label>
<label className="label">
<span className="label-text text-xl font-semibold">Date of birth</span>
</label>
<input {...register('date',{ required: true })} type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
{errors.date && <p>Date of birth  is required.</p>}
<label className="label">
</label>
<button className="btn btn-outlinemx-auto w-full bg-blue-600 hover:bg-blue-400 text-xl font-bold text-white">Submit </button>
</div>
<div className="form-control mt-6">
  <h1 className='font-bold text-center'>Or</h1>
       <button   className="btn btn-primary hover:bg-red-200 text-black font-bold bg-yellow-200 my-5">Google</button>
        </div>
 </form>

</div>
</div>
</div>
  </div>
  </div>
    );
};

export default JoinasAdmin;