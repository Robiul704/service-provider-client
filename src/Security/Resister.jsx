
import { Link,} from "react-router-dom";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const Resister = () => {
  const {register,handleSubmit,formState: { errors }, } = useForm();
const {googlelogin, creatuser ,updateprofile }=useContext(AuthContext)


  const onSubmit= (data) => {
    console.log(data)
    
    creatuser(data.email,data.password)
    .then(result=>{
        console.log(result)
      updateprofile(data.name,data.photoURL,data.phoneNumber)
      .then(result=>{
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
        console.log(result)
    })

  }

    return (
        <div>
            <div>
             <div style={{backgroundImage: 'url(https://i.ibb.co/Lz9b3Jy/desktop-wallpaper-top-windows-vista-mbr-hq-definition-live-1600x900.jpg)'}} className="hero  min-h-screen ">
  <div className="hero-content flex-col  lg:flex-row-reverse">
   
    <div className="card  hero-overlay bg-opacity-60 flex-shrink-0 w-full max-w-sm shadow-2xl bg-blue-300">
    <h1 className="text-5xl font-bold text-center mt-5">Resister</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input {...register('name',{ required: true })} type="text" name="name" placeholder="Name" className="input input-bordered" />
          {errors.name && <span className="text-red-900"> name is required</span>}
        </div>
        <div className="form-control">
        <label className="label">
            <span className="label-text">Date Of Birth</span>
          </label>
          <input {...register('phoneNumber')} type="date"  placeholder="Date Of Birth" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input {...register('photoURL',{ required: true })} type="text" name="photoURL" placeholder="photoURL" className="input input-bordered" />
          {errors.PhotoURL && <span className="text-red-900"> photoURL is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register('email',{ required: true })} type="email" name="email" placeholder="email" className="input input-bordered"  />
          {errors.email && <span className="text-red-900"> email is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          {/* //pattern: /[A-Z]+[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]+[a-zA-Z-/]/, */}
          <input {...register('password',{ required: true,maxLength: 20,minLength:6})} type="password" name="password" placeholder="password" className="input input-bordered"  />
          {errors.password?.type==='required' && <span className="text-red-900"> password is required</span>}
          {errors.password?.type==='maxLength' && <span className="text-red-900"> max 20 carecter</span>}
          {errors.password?.type==='minLength' && <span className="text-red-900"> min 6 carecter</span>}
          {/* {errors.password?.type==='pattern' && <span className="text-red-900">must be special carecter</span>} */}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Resister</button>
       <span > You have an Account please <span className="text-blue underline"><Link to='/login'>Login</Link></span></span>
       <button  onClick={handlegoogle} className="btn btn-primary hover:bg-red-200 text-black font-bold bg-yellow-200 my-5">Google</button>
        </div>
      </form>
      
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Resister;