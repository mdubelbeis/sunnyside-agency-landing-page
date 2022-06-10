const ProductItem = ({
  flexDir,
  image,
  title,
  description,
  color,
  hoverColor,
}) => {
  return (
    <div className={`md:flex ${flexDir}`}>
      <div className="md:w-6/12">
        <img src={image} alt={image} />
      </div>
      <div className="py-6 px-10 w-full space-y-4 lg:space-y-6 text-center md:w-6/12 md:text-left md:flex md:flex-col md:items-start md:justify-center lg:px-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-fraunces text-very-dark-desaturated-blue lg:pr-20">
          {title}
        </h2>
        <p className="text-md md:text-lg lg:text-xl text-dark-grayish-blue">
          {description}
        </p>
        <div>
          <a className="font-fraunces" href="#">
            LEARN MORE
            <div
              className={`border-4 w-[125px] mx-auto ${color} font-fraunces rounded-xl relative -top-2 md:mx-0 ${hoverColor}`}
            ></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
