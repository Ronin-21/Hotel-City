const ReservasBody = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-10 mx-auto my-20 py-20">
      <h2 className="text-5xl font-bold text-primary font-title text-shadow-sm text-shadow-dark/30">
        Reservá tu descanso ideal
      </h2>
      <p className="text-center text-gray-700 max-w-2xl mb-10 text-lg">
        Elegí la habitación perfecta para vos y asegurá tu lugar en uno de los
        destinos termales más reconocidos de Argentina. Reservá en pocos pasos,
        sin complicaciones.
      </p>
      <div className="w-7xl h-[800px] rounded-xl overflow-hidden shadow-lg mt-10">
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
