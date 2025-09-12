import Image from "next/image";

interface HeroProps {
  bgUrl: string;
  alt?: string;
}

const PagesHero = ({ bgUrl,alt = "Imagen de portada" }: HeroProps) => {
  return (
    <div
      className="relative bg-fixed bg-center bg-cover min-h-dvh"
    >
      {/* Imagen optimizada */}
      <Image
        src={bgUrl}
        alt={alt}
        fill
        className="object-cover object-center"
        priority
        quality={75}
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        <div className="flex flex-col items-center justify-center h-full gap-5 text-center text-white text-shadow-lg text-shadow-black/50">
          <h2 className="text-2xl font-medium md:text-3xl animate-fade-down animate-once animate-duration-[3000ms]">
            Bienvenidos a
          </h2>
          <h1 className="text-6xl md:text-8xl font-bold animate-fade-down animate-once animate-duration-[2000ms] font-title max-w-3xl">
            Grand Hotel <span className="text-primary">City</span> Termal
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PagesHero;
