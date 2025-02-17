import Black from "/src/assets/images/black.svg";
import Red from "/src/assets/images/red.svg";
import Green from "/src/assets/images/green.svg";
import Blue from "/src/assets/images/blue.svg";

const Colors = () => {
  return (
    <div className="mt-40 relative flex flex-col items-center text-center text-clr">
      <h1 className="mb-4 text-4xl font-bold">Colors</h1>
      <p className="text-lg font-light">Checkout our product colors.</p>

      <div className="relative mt-8 w-full flex justify-center">
        <img src="/vehicle2.svg" alt="Product" width={500} height={300} className="w-auto h-auto" />
        <div className="absolute -bottom-48 left-0 gap-1 hidden lg:flex flex-row">
          <img src={Blue} alt="Color 01" width={330} height={200} />
          <img src={Green} alt="Color 02" width={330} height={200} />
          <img src={Red} alt="Color 03" width={330} height={200} />
          <img src={Black} alt="Color 04" width={330} height={200} />
        </div>
      </div>
      <div className="mt-6 flex justify-center gap-2 -mb-50 sm:flex lg:hidden ">
        <img src={Blue} alt="Color 01" width={100} height={120} />
        <img src={Green} alt="Color 02" width={100} height={120} />
        <img src={Red} alt="Color 03" width={100} height={120} />
        <img src={Black} alt="Color 04" width={100} height={120} />
      </div>
    </div>
  );
};

export default Colors;
