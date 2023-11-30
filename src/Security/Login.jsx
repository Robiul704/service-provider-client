import { useContext } from "react";
// import { LoadCanvasTemplate } from "react-simple-captcha";
import { AuthContext } from "./AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// import { loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    // const [desabled,setdesabled]=useState(true)
    // const captchaRef=useRef()
//-----------------------------------------------
  // useEffect(()=>{
  //   loadCaptchaEnginge(6); 
  // },[])
  
  // const handlecaptchavalided=()=>{
  //   const value=captchaRef.current.value
  //   if(validateCaptcha(value)){
  //     setdesabled(false)
  //   }else{
  //     setdesabled(true)
  //   }
  // }
  
//---------------------------------------------------------
  const {signinuser,googlelogin}=useContext(AuthContext)
  const location=useLocation()
  const navigate=useNavigate()
      const handlelogin=(e)=>{
          e.preventDefault()
          const email=e.target.email.value;
          const password=e.target.password.value;
          console.log(email,password)
          signinuser(email,password)
          .then(result=>{
              console.log(result)
              navigate(location.state? location.state : '/')
          })
          .catch(error=>{
              console.log(error)
          })
//----------------------------------------------------------
}  
const handlegoogle=()=>{
    googlelogin()
    .then(result=>{
     console.log(result)
     navigate(location.state? location.state : '/')
    })

  }
    return (
        <div>
           <Helmet>
        <title>Service | login </title>
      </Helmet>
             <div>
            <div style={{backgroundImage: 'url(https://i.ibb.co/Lz9b3Jy/desktop-wallpaper-top-windows-vista-mbr-hq-definition-live-1600x900.jpg)'}} className="hero  min-h-screen ">
  <div className="hero-content flex-col  lg:flex-row-reverse">
   
    <div className="card hero-overlay bg-opacity-60 flex-shrink-0 w-full max-w-sm shadow-2xl bg-blue-300">
        <h1 className="text-5xl font-bold text-center mt-5">Login</h1>
      <form onSubmit={handlelogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        {/* <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input type="text" ref={captchaRef}  name="captcha" placeholder="type captcha" className="input input-bordered" required />
        <button className="btn btn-outline btn-xm  my-3" onClick={handlecaptchavalided}>
            valided
        </button>
        </div> */}
        <div className="form-control mt-6">
          <button   className="btn btn-primary">Login</button>
          <button onClick={handlegoogle} className="btn btn-primary hover:bg-red-200 text-black font-bold bg-yellow-200 my-5">Google</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Login