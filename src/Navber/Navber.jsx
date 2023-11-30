import { useContext, useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Security/AuthProvider";
import { useForm } from "react-hook-form";
import UseEmployee from "../Axios/UseEmployee";

import UseTeam from "../Axios/UseTeam";
import UseAxiosSecure from "../Axios/UseAxiosSecure";
const Navber = () => {
  const axiosSecure=UseAxiosSecure()
  const {user,signout}=useContext(AuthContext)
  const  [Employee]=UseEmployee()
  const [Team,refetch]=UseTeam()
  const datas=Employee.find(em=>em?.email===user?.email)
  console.log(datas)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isAdmin,setadmin]=useState()
  useEffect(()=>{
    if(user?.email==='a@b.com'){
      setadmin(true)
    }
  },[user])
  
    const handleLogout=()=>{
      signout()
      .then(result=>{
        console.log(result)
      })
      .catch(error=>{
        console.log(error)
      })
    }
    const onSubmit= (data) => {
      const displayName=data.name
      const email=data.email
      const photoURL=data.photoURL
      const dateOfBirth=data.date
       const info={displayName,email,photoURL,dateOfBirth}
       console.log(info)
       axiosSecure.patch(`/Employee/${user.email}`,info)
       .then(res=>{
         console.log(res.data)
         refetch()
       })
     }

    const links=<>
    <NavLink  to={'/'} className={({ isActive, isPending }) =>
           isPending ? "pending" : isActive ? "underline mr-5 text-blue-700" : "mr-5 hover:text-gray-100"
         }> Home</NavLink>
         {
            !user && <div>
                <NavLink  to={'/joinasemployee'} className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "underline mr-5 text-blue-700" : "mr-5 hover:text-gray-100"
}>Join as Employee</NavLink>
<NavLink  to={'/joinasadmin'} className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "underline mr-5 text-blue-700" : "mr-5 hover:text-gray-100"
}> Join as Admin</NavLink>
            </div>
         }
        {
        user  && !isAdmin && <>
        
        <NavLink  to={'/myteam'} className={({ isActive, isPending }) =>
           isPending ? "pending" : isActive ? "underline mr-5 text-blue-700" : "mr-5 hover:text-gray-100"
         }>My Team</NavLink>
        <NavLink  to={'/myassets'} className={({ isActive, isPending }) =>
           isPending ? "pending" : isActive ? "underline mr-5 text-blue-700" : "mr-5 hover:text-gray-100"
         }>My Assets</NavLink>
        <NavLink  to={'/requestforanasse'} className={({ isActive, isPending }) =>
           isPending ? "pending" : isActive ? "underline mr-5 text-blue-700" : "mr-5 hover:text-gray-100"
         }>Request for an Asse</NavLink>
        <NavLink  to={'/makeacustomrequest'} className={({ isActive, isPending }) =>
           isPending ? "pending" : isActive ? "underline mr-5 text-blue-700" : "mr-5 hover:text-gray-100"
         }>Make a Custom Request</NavLink>
       
       </>
            }
        {
        user && isAdmin && <div>
    <NavLink  to={'/myemployeelist'} className={({ isActive, isPending }) =>
           isPending ? "pending" : isActive ? "underline mr-5 text-blue-700" : "mr-5 hover:text-gray-100"
         }>
       <h1 className="badge badge-secondary">My Employee list +{Team.length}</h1></NavLink>
    <NavLink  to={'/addanemployee'} className={({ isActive, isPending }) =>
           isPending ? "pending" : isActive ? "underline mr-5 text-blue-700" : "mr-5 hover:text-gray-100"
         }>Add an Employee</NavLink>
    <NavLink  to={'/assetlist'} className={({ isActive, isPending }) =>
           isPending ? "pending" : isActive ? "underline mr-5 text-blue-700" : "mr-5 hover:text-gray-100"
         }>Asset List</NavLink>
    <NavLink  to={'/addanasset'} className={({ isActive, isPending }) =>
           isPending ? "pending" : isActive ? "underline mr-5 text-blue-700" : "mr-5 hover:text-gray-100"
         }>Add an Asset</NavLink>
    <NavLink  to={'/allrequests'} className={({ isActive, isPending }) =>
           isPending ? "pending" : isActive ? "underline mr-5 text-blue-700" : "mr-5 hover:text-gray-100"
         }>All Requests</NavLink>
    <NavLink  to={'/customrequestslist'} className={({ isActive, isPending }) =>
           isPending ? "pending" : isActive ? "underline mr-5 text-blue-700" : "mr-5 hover:text-gray-100"
         }>Custom Requests List</NavLink>
    </div> 

    }
</>


    return (
        <div>
            <div className="navbar sticky z-10  mx-auto container opacity-70 bg-orange-300">
  <div className="navbar-start">
    <div className="dropdown ">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-500 rounded-box w-52">
      {links}
      </ul>
    </div>
    <div className="flex justify-start items-center">
    <img className="h-10 w-20 rounded-xl" src="https://i.ibb.co/T0HR857/png-transparent-pictogram-business-service-symbol-business-hand-service-people.png" alt="" />
    <h1 className="font-bold text-2xl">Service Provider</h1>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end gap-5">
  {
    user &&  <>
    <div className="dropdown">
      <label tabIndex={0} >
        
        <div>
        <img className="h-10 w-10 rounded-full" src={user.photoURL} alt="" />
        <h1 className="lowercase">Profile</h1>
          
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-lg dropdown-content mt-3   z-[1] p-2  rounded-box w-52">
      <div className="dropdown">
  <div tabIndex={0} className="dropdown-content z-[1] card card-compact w-44 p-2 shadow bg-primary text-primary-content">
  <figure><img className="h-20 w-20 rounded-full" src={user?.photoURL} alt="Shoes" /></figure>
    <div className="card-body">
    <h1>Full Name: {user?.displayName}</h1>
    <hr />
    <h1>{user?.email}</h1>
    <hr />
    <h1>Date of Birth :</h1>
    <button  className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>Update</button>
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
<div>
<label className="label">
<span className="label-text text-xl font-semibold"> Full Name</span>
</label>
<input defaultValue={user?.displayName} {...register('name')} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

<label className="label">
</label>
<label className="label">
<span className="label-text text-xl font-semibold">Email</span>
</label>
<h1 className="text-xl">{user?.email}</h1>
          <label className="label">
            <span className="label-text text-xl font-semibold">PhotoURL</span>
          </label>
          <input defaultValue={user?.photoURL} {...register('photoURL')} type="text" name="photoURL" placeholder="photoURL" className="input input-bordered" />
          
<label className="label">
</label>
<label className="label">
<span className="label-text text-xl font-semibold">Date of birth</span>
</label>
<input defaultValue={user?.dateOfBirth}  {...register('date',{ required: true })} type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
{errors.date && <p>Date of birth  is required.</p>}
<label className="label">
</label>
</div>
    
    <div className="modal-action">
      <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
        <button className="btn">Update</button>
        
      </form>
    </div>
  </div>
</dialog>
    </div>
  </div>
</div>
      </ul>
    </div>

    </>
  
   }
  {
    user && <p>{user.displayName}</p>
   }
    {
   user? <NavLink onClick={handleLogout} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline mr-5 text-blue-700" : "mr-5 hover:text-gray-100"
  }><button>LogOut</button></NavLink> :  <NavLink to={'/login'} className={({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "underline mr-5 text-blue-700" : "mr-5 hover:text-gray-100"
}>Login</NavLink>
   }
   
  </div>
</div>
        </div>
    );
};

export default Navber;