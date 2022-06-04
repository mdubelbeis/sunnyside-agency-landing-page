const ProductItem = ({ image, title, description, color }) => {
  return (
    <>
      <div>
        <img src={image} alt="egg" />
      </div>
      <div className="py-14 px-6 space-y-6 text-center">
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
              className={`border-4 w-[125px] mx-auto ${color} font-fraunces rounded-xl relative -top-2`}
            ></div>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
