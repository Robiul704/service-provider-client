import { Form } from "react-router-dom";
import UseAsset from "../../Axios/UseAsset";
import Requ from "./Requ";
import { useContext, useState } from "react";
import { AuthContext } from "../../Security/AuthProvider";
import { Helmet } from "react-helmet-async";



const RequestforanAsse = () => {

 
        const [asset]=UseAsset()
        console.log(asset)


        
        const [blogs,setblogs]=useState(asset)
        console.log(blogs)
        const {loading}=useContext(AuthContext)
    
    
      //  const habndlesearch=(e)=>{
      //   e.preventDefault()
      //   const title=e.target.title.value;
      //   const filter=asset.filter(blog=>blog.ProductName===title)
        
      //   if(title.length>0){
      //     if(filter){
      //       refetch()
      //   setblogs(filter)
      //   }
      //   e.target.reset()
      //  }
      //   }
        


       const handlefilter=(e)=>{
        e.preventDefault()
        const category=e.target.select.value;
        const filter=asset.filter(ass=>ass.ProductType===category)
        if(filter){
            setblogs(filter)
            
            }
       }
       if(loading){
        return <p>loading.....</p>
       }
       
      
    return (
        <div>
           <div className="my-10 text-center bg-lime-100 py-5 px-5 ">
           <Helmet>
        <title>Service | Request Of An Asset</title>
      </Helmet>
            <h1 className="text-4xl my-5 font-bold"> search items by it’s names.</h1>
         <Form >
         
         <input name="title" className=" bg-amber-300 py-3 px-3 rounded-l-xl" type="text" placeholder="search by items name " />
            <button className=" px-4 rounded-r-xl py-3 bg-blue-500">Search</button>
         </Form>
                <h1 className="text-5xl font-bold text-center underline my-5">filter items by request</h1>
      
                <Form onSubmit={handlefilter} className="my-5">
                <select name="select" className="select select-primary w-36 max-w-xs">
  <option disabled defaultValue={'All'}>All</option>
  <option>pending</option>
  <option>Aproved</option>
  <option>Returnable</option>
  <option>Non-returnable</option>
</select>
                <button className=" px-4 rounded-r-xl py-3 bg-blue-500">Filter</button>
                </Form>
        
        </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 m-5">
        {
       asset.map((ass,i)=><Requ key={ass._id} ass={ass} i={i}></Requ>)
      }
        </div>
        
    </div>
    );
};

export default RequestforanAsse;