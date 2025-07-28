const MotorReservas = () => {
  return (
    <section className="w-full min-h-screen px-4 py-10 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl text-primary font-semibold font-title mb-8">
          Reservá tu estadía
        </h1>
        <div className="w-full h-[800px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://wubook.net/nneb/bk?f=today&n=1&ep=07b058c3&o=1.0.0.0"
            title="Motor de reservas Ambassador"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
export default MotorReservas;
