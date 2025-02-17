const ProductInfo = () => {
  return (
    <div className="m-10 mt-30 flex flex-col text-clr">
      <h1 className="mb-8 font-bold text-4xl text-center">Product Information</h1>
      <p className="font-light text-lg text-center">
        Our Scooter has the following unique design and technology features:
      </p>
      <div className="flex flex-col lg:flex-row gap-28 mt-8 mb-15">
        <img src="/productinfo.svg" className="w-175 -mb-15  self-start lg:self-auto" alt="Product" width="300" 
        />
        <img src="/features.svg" className="w-xs mb-0 lg:mb-0 mx-auto lg:ml-10 lg:w-sm" alt="Features" width="300" />
      </div>
    </div>
  );
};

export default ProductInfo;
