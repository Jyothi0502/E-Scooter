const Features = () => {
    return (
        <div className="mt-8 ml-10 mr-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-6 text-3xl text-clr">
            <div className="h-32 text-center p-6 shadow-2xl rounded-lg flex flex-col justify-center items-center bg-white">
                <p className="font-bold">105 lbs</p>
                <p className="mt-4 text-sm">Net Weight</p>
            </div>
            <div className="h-32 text-center p-6 shadow-2xl rounded-lg flex flex-col justify-center items-center bg-white">
                <p className="font-bold">26 mph</p>
                <p className="mt-4 text-sm">Top Speed</p>
            </div>
            <div className="h-32 text-center p-6 shadow-2xl rounded-lg flex flex-col justify-center items-center bg-white">
                <p className="font-bold">38 miles</p>
                <p className="mt-4 text-sm">Max Range</p>
            </div>
            <div className="h-32 text-center p-6 shadow-2xl rounded-lg flex flex-col justify-center items-center bg-white">
                <p className="font-bold">89 nm</p>
                <p className="mt-4 text-sm">Max Torque</p>
            </div>
            <div className="h-32 text-center p-6 shadow-2xl rounded-lg flex flex-col justify-center items-center bg-white">
                <p className="font-bold">22% slope</p>
                <p className="mt-4 text-sm">Hill Climbing</p>
            </div>
            <div className="h-32 text-center p-6 shadow-2xl rounded-lg flex flex-col justify-center items-center bg-white">
                <p className="font-bold">2x</p>
                <p className="mt-4 text-sm">Hydraulic Disc Brakes</p>
            </div>
        </div>
    );
};

export default Features;
