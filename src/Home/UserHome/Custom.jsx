

const Custom = ({make}) => {
    console.log(make)
    return (
        <div className="flex gap-5 ">
            <div className="bg-green-300 text-2xl font-bold py-3 px-5 "></div>
            <div className="bg-green-300 text-2xl font-bold py-3 px-5 "> </div>
            <div className="bg-green-300 text-2xl font-bold py-3 px-5 "> </div>
            <div className="bg-green-300 text-2xl font-bold py-3 px-5 ">Status:Pending</div>



           
        </div>
    );
};

export default Custom;