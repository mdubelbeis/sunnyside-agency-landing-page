const ProductDesign = ({ title, description, bgImage }) => {
  return (
    <div
      className={`${bgImage} bg-no-repeat bg-cover w-full h-[600px] flex justify-center items-end font-fraunces`}
    >
      <div className="space-y-8 p-4 text-center mb-10 opacity-75 ">
        <h2 className="text-3xl text-very-dark-desaturated-blue">
          {title}
        </h2>
        <p className="text-md font-barlow leading-6 tracking-wide text-dark-blue font-light">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductDesign;
