import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative min-h-dvh md:bg-fixed">
      {/* Imagen de fondo optimizada */}
      <Image
        src="/lobby.webp"
        alt="Vista exterior del Grand Hotel Panamericano"
        fill
        priority
        quality={75}
        className="object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center px-4 bg-black/60">
        <div className="flex flex-col items-center justify-center h-full gap-4 text-center text-white sm:gap-5 text-shadow-lg text-shadow-black/50">
          {/* Subtítulo */}
          <h2 className="text-xl sm:text-2xl md:text-2xl font-medium animate-fade-down animate-once animate-duration-[3000ms]">
            Viví Termas de Rio Hondo!
          </h2>

          {/* Título principal */}
          <h1 className="text-6xl md:text-8xl font-bold animate-fade-down animate-once animate-duration-[2000ms] font-title max-w-3xl">
            Grand Hotel <span className="text-primary">City</span> Termal
          </h1>

          {/* Texto descriptivo */}
          <p className="w-full mt-3 text-base md:max-w-xl sm:mt-5 sm:text-lg md:text-xl">
            Disfrutá del equilibrio perfecto entre descanso, bienestar y
            calidez.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
