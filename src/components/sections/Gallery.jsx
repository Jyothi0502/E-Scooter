import gallery1 from "/src/assets/images/gallery1.svg";
import gallery2 from "/src/assets/images/gallery2.svg";
import gallery3 from "/src/assets/images/gallery3.svg";

import Colors from "./gallery/Colors";
const Gallery = () => {
  return (
    <div className="m-10 text-clr">
      <div className="mt-20 flex-col text-clr mb-10 ">
        <h1 className="mb-8 font-bold text-4xl text-center gap">Gallery</h1>
        <p className="font-light text-lg text-center">
          View gallery of our products and make yourself satisfied with our creation.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10">
        <img src={gallery2} alt="Scooter" className="w-full max-w-[680px] h-auto mx-auto md:mt-10 lg:mt-80" />
        <img src={gallery1} alt="Build Quality" className="w-full max-w-[680px] h-auto mx-auto mt-5 lg:mt-40 md:ml-6" />
        <div className="flex flex-col items-center md:items-start mt-10 space-y-4">
          <button className="w-full max-w-[600px] h-20 px-10 py-4 border border-gray-800 text-xl font-semibold rounded-lg hover:bg-gray-200 cursor-pointer  ">
            Battery Images
          </button>
          <button className="w-full max-w-[600px] h-20 px-10 py-4 border border-gray-800 text-xl font-semibold rounded-lg hover:bg-gray-200 cursor-pointer ">
            Spare Parts Images
          </button>
          <button className="w-full max-w-[600px] h-20 px-10 py-4 border border-gray-800 text-xl font-semibold rounded-lg hover:bg-gray-200 cursor-pointer ">
            Charging Cable Images
          </button>
        </div>
        <img src={gallery3} alt="Close-up" className="w-full max-w-[680px] h-auto mx-auto md:mt-0 lg:-mt-35 md:ml-6" 
        />
      </div>
      <div className="mt-10 ">
        <Colors />
      </div>
    </div>
  );
};

export default Gallery;
