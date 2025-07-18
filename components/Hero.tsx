const Hero = () => {
  return (
    <div className="min-h-dvh bg-cover bg-center bg-[url('/lobby.png')] relative">
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <div className="flex flex-col items-center text-center justify-center h-full gap-12 text-white">
          <h1 className="text-4xl md:text-7xl font-bold">
            Bienvenido al Hotel City
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl">
            Descubre el Hotel City, tu refugio de lujo en la ciudad. Disfruta de
            habitaciones elegantes, servicios excepcionales y una ubicación
            inmejorable. ¡Reserva ahora y vive una experiencia inolvidable!
          </p>
          <button className="btn btn-primary">Reservar Ahora</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
