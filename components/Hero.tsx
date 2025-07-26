const Hero = () => {
  return (
    <div className="min-h-dvh bg-cover bg-center bg-[url('/lobby.png')] relative bg-fixed">
      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        <div className="flex flex-col items-center justify-center h-full gap-5 text-center text-white text-shadow-lg text-shadow-black/50">
          <h2 className="text-2xl md:text-4xl font-medium">Bienvenido al</h2>
          <h1 className="text-4xl font-bold md:text-8xl font-title">
            Hotel City
          </h1>
          <p className="max-w-2xl mt-5 text-lg md:text-2xl">
            Descubre el Hotel City, tu refugio de lujo en la ciudad. Disfruta de
            habitaciones elegantes, servicios excepcionales y una ubicación
            inmejorable. ¡Reserva ahora y vive una experiencia inolvidable!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
