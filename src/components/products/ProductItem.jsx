const ProductItem = ({
  flexDir,
  image,
  title,
  description,
  color,
}) => {
  return (
    <div className={`md:flex md:${flexDir}`}>
      <div className="md:w-6/12">
        <img src={image} alt="egg" />
      </div>
      <div className="py-14 px-6 space-y-6 text-center md:w-6/12 md:text-left md:my-auto md:p-20">
        <h2 className="text-3xl font-fraunces text-very-dark-desaturated-blue">
          {title}
        </h2>
        <p className="text-lg text-dark-grayish-blue">
          {description}
        </p>
        <div>
          <a className="font-fraunces " href="#">
            LEARN MORE
            <div
              className={`border-4 w-[125px] mx-auto ${color} font-fraunces rounded-xl relative -top-2 md:mx-0`}
            ></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
