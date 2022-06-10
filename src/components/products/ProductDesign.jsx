import { useState } from 'react';

const ProductDesign = ({ title, description, backgroundImg }) => {
  return (
    <div
      className={`${backgroundImg} bg-no-repeat bg-top bg-cover object-fit md:w-6/12 h-[550px] md:h-[550px] xl:h-[750px] flex justify-center items-end font-fraunces`}
    >
      <div className="space-y-4 p-10 text-center opacity-75 md:px-18 lg:px-32">
        <h2 className="text-3xl text-very-dark-desaturated-blue">{title}</h2>
        <p className="text-md font-barlow leading-6 tracking-wide text-dark-blue font-light">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductDesign;
