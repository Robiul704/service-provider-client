

const Pacages = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold text-blue-900 text-center mb-5 underline">Our Pacages</h1>
            <div className="grid gap-5 my-7 lg:grid-cols-3 md:grid-cols-2 text-center">
            <div className="text-3xl font-bold text-white bg-gradient-to-r from-red-500 to-cyan-500 p-10 py-20">
            <h1 >Maximum 5 employees</h1>
            <span className="text-6xl">$5</span>
            </div>
            <div className="text-3xl font-bold text-white bg-gradient-to-r from-yellow-400 to-black py-20">
            <h1 > Maximum 5 employees</h1>
            <span className="text-6xl">$8</span>
            </div>
           <div className="text-3xl  font-bold text-white bg-gradient-to-r from-green-500 to-yellow-400 py-20">
           <h1 >Maximum 5 employees </h1>
            <span className="text-6xl">$15</span>
           </div>
        </div>
        </div>
    );
};

export default Pacages;