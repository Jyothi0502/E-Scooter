import text1 from "/src/assets/images/text.svg";
import text2 from "/src/assets/images/text2.svg";
import acc1 from "/src/assets/images/acc1.svg";
import acc2 from "/src/assets/images/acc2.svg";
import acc3 from "/src/assets/images/acc3.svg";
import acc4 from "/src/assets/images/acc4.svg";

const Accessories = () => {
  return (
    <div className=" mt-10 text-clr flex flex-col items-center">
      <h1 className="mb-8 font-bold text-4xl text-center">Multiple Accessories</h1>
      <p className="font-light text-lg text-center">
        There are multiple modes for the scooter for your multiple needs.
      </p>

      <div className="mt-20 flex flex-col lg:flex-row justify-between items-center gap-10">
        <img src={text1} className="w-56 mx-auto lg:w-64 " alt="Product1" width="300" />
        <img src={acc1} className="w-110 mx-auto" alt="Product2" width="300" />
        <img src={acc2} className="w-110 mx-auto " alt="Product3" width="300" />
      </div>

    
      <div className="mt-20 flex flex-col lg:flex-row lg:justify-between items-center gap-10 w-full">
        <img src={acc3} className="w-80 lg:self-start lg:self-auto " alt="Product4" width="300" />
        <img src={acc4} className="w-50 mx-auto " alt="Product5" width="300" />
        <img src={text2} className="w-56 mx-auto lg:w-64" alt="Product6" width="300" />
      </div>
    </div>
  );
};

export default Accessories;
