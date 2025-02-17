const Accessories = () => {
  return (
    <div className=" mt-10 text-clr flex flex-col items-center">
      <h1 className="mb-8 font-bold text-4xl text-center">Multiple Accessories</h1>
      <p className="font-light text-lg text-center">
        There are multiple modes for the scooter for your multiple needs.
      </p>

      {/* First Row */}
      <div className="mt-20 flex flex-col lg:flex-row justify-between items-center gap-10">
        <img src="/text.svg" className="w-56 mx-auto lg:w-64 " alt="Product1" width="300" />
        <img src="/acc2.svg" className="w-110 mx-auto" alt="Product2" width="300" />
        <img src="/acc1.svg" className="w-110 mx-auto " alt="Product3" width="300" />
      </div>

    
      <div className="mt-20 flex flex-col lg:flex-row lg:justify-between items-center gap-10 w-full">
        <img src="/acc3.svg" className="w-80 lg:self-start lg:self-auto " alt="Product4" width="300" />
        <img src="/acc4.svg" className="w-50 mx-auto " alt="Product5" width="300" />
        <img src="/text2.svg" className="w-56 mx-auto lg:w-64" alt="Product6" width="300" />
      </div>
    </div>
  );
};

export default Accessories;
