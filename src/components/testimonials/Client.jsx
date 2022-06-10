const Client = ({ testimonial, img }) => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <img
          className="rounded-full w-16 lg:w-20"
          src={img}
          alt="client picture"
        />
      </div>
      <div className="mt-8 text-lg text-gray-500">
        <p>{testimonial.text}</p>
      </div>
      <div className="mt-8 font-fraunces">
        <p>{testimonial.name}</p>
      </div>
      <div className="text-gray-400">
        <small>{testimonial.role}</small>
      </div>
    </div>
  );
};

export default Client;
