import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Security/AuthProvider';
import UseAxiosPublic from '../Axios/UseAxiosPublic';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const JoinasEmployee = () => {
     const {register,handleSubmit,formState: { errors }, } = useForm();
      const {googlelogin, creatuser ,updateprofile }=useContext(AuthContext)
      const axiosPublic=UseAxiosPublic()
      const location=useLocation()
      const navigate=useNavigate()

      const onSubmit= (data) => {
        const displayName=data.name
        const email=data.email
        const photoURL=data.photoURL
        const password=data.password
        const dateOfBirth=data.date
        const date=new Date()
        const type='Employee'
        const info={displayName,type,email,password,date,dateOfBirth,photoURL}
        console.log(info)
       
        creatuser(data.email,data.password)
        .then(result=>{
            console.log(result)
          updateprofile(data.name,data.photoURL)
          .then(result=>{
            navigate(location.state? location.state : '/')
            
            axiosPublic.post('/Employee',info)
            .then(res=>{
              console.log(res.data)

            })
            console.log(result.data)
            }) 
          })
          .catch(error=>{
            console.log(error)
          })
      }
      const handlegoogle=()=>{
        googlelogin()
        .then(result=>{
          navigate(location.state? location.state : '/')
          const userinfo={
            email:result.user.email,
            displayName:result.user.displayName
          }
          axiosPublic.post('/Employee',userinfo)
          .then(res=>{
            console.log(res.data)
          })
        })
    
      }
      
    return (
       <div  style={{backgroundImage: 'url(https://i.ibb.co/Lz9b3Jy/desktop-wallpaper-top-windows-vista-mbr-hq-definition-live-1600x900.jpg)'}} className="hero  min-h-screen ">
<div className="hero-content px-10 flex-col  lg:flex-row-reverse">
<Helmet>
        <title>Service | Join Employee</title>
      </Helmet>

<div className="card  hero-overlay bg-opacity-60 flex-shrink-0 w-full max-w-sm shadow-2xl bg-blue-300">
<h1 className="text-5xl font-bold text-center mt-5">Join As Employee</h1>
<form className='px-16 py-5' onSubmit={handleSubmit(onSubmit)}>
     <div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text text-xl font-semibold"> Full Name</span>
</label>
<input {...register('name',{ required: true })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
{errors.name && <p>Full Name is required.</p>}
<label className="label">
</label>
<label className="label">
<span className="label-text text-xl font-semibold">Email</span>
</label>
<input {...register('email',{ required: true })} type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
{errors.email && <p>Email  is required.</p>}
          <label className="label">
            <span className="label-text text-xl font-semibold">PhotoURL</span>
          </label>
          <input {...register('photoURL',{ required: true })} type="text" name="photoURL" placeholder="photoURL" className="input input-bordered" />
          {errors.PhotoURL && <span className="text-red-900"> photoURL is required</span>}

<label className="label">
</label>
<label className="label">
<span className="label-text text-xl font-semibold"> Password</span>
</label>
<input {...register('password',{ required: true })} type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
{errors.password && <p>Password is required.</p>}
<label className="label">
</label>
<label className="label">
<span className="label-text text-xl font-semibold">Date of birth</span>
</label>
<input {...register('date',{ required: true })} type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
{errors.date && <p>Date of birth  is required.</p>}
<label className="label">
</label>
<button className="btn btn-outline mx-auto w-full  bg-blue-600 hover:bg-blue-400 text-xl font-bold text-white">Signup</button>
</div>
<div className="form-control mt-6">
  <h1 className='font-bold text-center'>Or</h1>
       <button  onClick={handlegoogle} className="btn btn-primary hover:bg-red-200 text-black font-bold bg-yellow-200 my-5">Google</button>
        </div>
     </form>

</div>
</div>
</div>
    );
};

export default  JoinasEmployee;