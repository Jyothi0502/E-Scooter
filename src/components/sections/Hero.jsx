import dicider from "/src/assets/images/dicider.svg";
import vehicle from "/src/assets/images/vehicle.svg";
import one from "/src/assets/images/01.svg";
import arrows from "/src/assets/images/arrows.svg";
import arrow from "/src/assets/images/icon.svg";
import play from "/src/assets/images/play button.svg";
const Hero = () => {
    return (
      <div className="flex flex-col lg:flex-row items-center justify-between mt-0 text-clr px-10">
        <div className="lg:w-1/2">
          <h1 className="text-7xl uppercase font-thin tracking-wide mt-12 mb-2">
            Let's ride
          </h1>
          <h1 className="text-7xl uppercase font-bold tracking-widest">
            the future.
          </h1>
          <img src={dicider}className="mt-20 lg:mt-28" alt="dicider" />
          <p className="text-lg mt-6 w-90 break-words tracking-[.05rem]">
            Simple and sleek design with users in mind.
          </p>
          <div className="flex items-center gap-28 mt-6">
            <div className="flex items-center gap-2 cursor-pointer">
              <img src={arrow} className="arrow" alt="arrow" width={40} />
              <p className="text-m font-semibold">Buy Now</p>
            </div>
            <div className="flex items-center cursor-pointer">
              <p className="text-m break-words p-0 w-22">Watch our video how it works</p>
              <img src={play} className="play" alt="play" />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col items-center lg:items-end gap-3 order-last lg:order-none lg:ml-10">
          <img src={vehicle} alt="vehicle" className="w-5/6 mt-6 lg:mt-4 lg:w-xl lg:mr-10" />
          <div className="flex gap-8 mt-0 lg:-mt-5 mr-10">
            <img src={one}alt="number" width={80} />
            <img src={arrows} alt="double-arrow" width={80} />
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;
  