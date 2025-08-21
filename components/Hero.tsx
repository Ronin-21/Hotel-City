const Hero = () => {
  return (
    <div className="min-h-dvh bg-cover bg-center bg-[url('/lobby.webp')] relative md:bg-fixed">
      <div className="absolute inset-0 flex items-center justify-center bg-black/60 px-4">
        <div className="flex flex-col items-center justify-center h-full gap-4 sm:gap-5 text-center text-white text-shadow-lg text-shadow-black/50">
          {/* Subtítulo */}
          <h2 className="text-xl sm:text-2xl md:text-2xl font-medium animate-fade-down animate-once animate-duration-[3000ms]">
            Viví Termas de Rio Hondo!
          </h2>

          {/* Título principal */}
          <h1 className="text-6xl md:text-8xl font-bold animate-fade-down animate-once animate-duration-[2000ms] font-title max-w-3xl">
            Grand Hotel <span className="text-primary">City</span> Termal
          </h1>

          {/* Texto descriptivo */}
          <p className="max-w-xl mt-3 sm:mt-5 text-base sm:text-lg md:text-xl">
            Disfrutá del equilibrio perfecto entre descanso, bienestar y
            calidez.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
