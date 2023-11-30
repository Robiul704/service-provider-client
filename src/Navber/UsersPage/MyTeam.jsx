import { Helmet } from "react-helmet-async";

import UseTeam from "../../Axios/UseTeam";


const MyTeam = () => {
    // const [Employee,refetch]=UseEmployee()
    const [Team,refetch]=UseTeam()
    

    refetch()
    return (
        <div>
           <Helmet>
        <title>Service | my team</title>
      </Helmet>
            <h1>Team Member List</h1>
            <div className="overflow-x-auto">
  <table className="table">
    <thead>
    <tr className="text-xl font-bold bg-blue-300">
        <th>Serial</th>
         <th>Image</th>
        <th>Name</th>
        <th>Member Type</th>
      </tr>
    </thead>
    <tbody className="">
      {
       Team.map((ass,i)=><tr key={ass._id} className="text-xl bg-red-300 font-bold ">
         <th>{i+1}</th>
    <td><img className="h-44 w-44 rounded-full" src={ass.photoURL} alt="" /></td>
    <td><p>{ass.displayName}</p></td>
    <td>{ass.type}</td>
      </tr>)
      }
    </tbody>
  </table>
</div>



        </div>
    );
};

export default MyTeam;