import { useContext, useState } from "react";
import { AuthContext } from "../../Security/AuthProvider";

import { Form, useLocation, useNavigate } from "react-router-dom";
import UseAllRequest from "../../Axios/UseAllRequest";
import { Helmet } from "react-helmet-async";





const MyAssets = () => {
    const [allRequest,refetch]=UseAllRequest()
    const [asset,setasset]=useState(allRequest)
    const location=useLocation()
    const navigate=useNavigate()
    const {loading}=useContext(AuthContext)
    const habndlesearch=(e)=>{
        e.preventDefault()
        const assetname=e.target.title.value;
        const filter=asset.filter(ass=>ass.AssetName===assetname)
        
    
          if(filter){
            setasset(filter)
            refetch()
        }
        else if(!filter){
          setasset(allRequest)
          navigate(location.state? '/myassets' : '/myassets')
          refetch()
        }
        e.target.reset()
       }
       const handlefilter=(e)=>{
       
        e.preventDefault()
        const Assettype=e.target.select.value;
        console.log(Assettype)
        const filter=asset.filter(asset=>asset?.AssetType===Assettype)
        console.log(filter)
        if(filter){
          setasset(filter)
            } else if(!filter){
              setasset(allRequest)
              navigate(location.state? '/myassets' : '/myassets')
              refetch()
            }
       }
       refetch()
       if(loading){
        return <p>loading.....</p>
       }

       refetch()
       
    return (
        <div>
             <Helmet>
        <title>Service | my asset</title>
      </Helmet>
            <div className="my-10 text-center bg-lime-100 py-5 px-5">
            <h1 className="text-4xl my-5 font-bold"> search items by it’s names.</h1>
         <Form onSubmit={habndlesearch}>
         
         <input  name="title" className=" bg-amber-300 py-3 px-3 rounded-l-xl" type="text" placeholder="search by items name " />
            <button className=" px-4 rounded-r-xl py-3 bg-blue-500">Search</button>
         </Form>
                <h1 className="text-5xl font-bold text-center underline my-5">filter items by request</h1>
      
                <Form onSubmit={handlefilter} className="my-5">
                <select name="select" className="select select-primary w-36 max-w-xs">
  <option disabled >All</option>
  <option>pending</option>
  <option>aproved</option>
  <option>returnable</option>
  <option>non-returnable</option>
</select>
                <button className=" px-4 rounded-r-xl py-3 bg-blue-500">Filter</button>
                </Form>
        
        </div>
        <div className="grid md:grid-cols-2 gap-5 m-5 lg:grid-cols-3">
        { 
            allRequest.map(all=>  <div key={all._id} className="card  bg-blue-300 text-black">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Asset Name:{all.AssetName} </h2>
              <h2 className="card-title">AssetType:{all.AssetType} </h2>
              <h2 className="card-title">Status: {all.Status} </h2>
              <h2 className="card-title">Request Date: {all.Dates} </h2>
              <h2 className="card-title">Approval Date :{all.AppruvalDate} </h2>
              <h2 className="card-title">Additional note: {all.AdditionalInformation}</h2>
              <div className="card-actions justify-end">
                {
                    all.Status==='pending'&& <button className="btn btn-outline bg-yellow-200">Cancel</button>
                }
                {
                    all.Status==='Approved'&& <button className="btn btn-outline bg-yellow-200">Print</button>
                }
                {
                    all.AssetType==='Returnable'&& <button className="btn btn-outline bg-yellow-200">Return</button>
                }
             
              </div>
            </div>
          </div>)
        }
        </div>
        </div>
    );
};

export default MyAssets;