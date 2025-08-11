const Hero = () => {
  return (
    <div className="min-h-dvh bg-cover bg-center bg-[url('/lobby.png')] relative bg-fixed">
      <div className="absolute inset-0 flex items-center justify-center bg-black/60">
        <div className="flex flex-col items-center justify-center h-full gap-5 text-center text-white text-shadow-lg text-shadow-black/50">
          <h2 className="text-2xl font-medium md:text-3xl animate-fade-down animate-once animate-duration-[3000ms]">
            Viví Termas de Rio Hondo!
          </h2>
          <h1 className="text-4xl font-bold md:text-9xl animate-fade-down animate-once animate-duration-[2000ms] uppercase font-title">
            <span className="text-primary">City</span> Hotel
          </h1>
          <p className="max-w-xl mt-5 text-lg md:text-xl">
            Disfrutá del equilibrio perfecto entre descanso, bienestar y
            calidez.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
