const ReservasBody = () => {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen gap-10 mx-auto my-20">
      <h2 className="text-5xl text-primary font-semibold font-title">
        Reservá tu estadía
      </h2>
      <p className="text-center text-gray-700 max-w-2xl mb-10 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illum
        dicta cupiditate, laudantium voluptatem animi ipsam nemo laboriosam
        impedit voluptates!
      </p>
      <div className="w-full h-[800px] rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://wubook.net/nneb/bk?f=today&n=1&ep=07b058c3&o=1.0.0.0"
          title="Motor de reservas Ambassador"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ReservasBody;
