interface HeroProps {
  bgUrl: string;
}

const PagesHero = ({ bgUrl }: HeroProps) => {
  return (
    <div
      className="min-h-dvh bg-cover bg-center relative bg-fixed"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        <div className="flex flex-col items-center justify-center h-full gap-5 text-center text-white text-shadow-lg text-shadow-black/50">
          <h2 className="text-2xl font-medium md:text-3xl animate-fade-down animate-once animate-duration-[3000ms]">
            Bienvenidos a
          </h2>
          <h1 className="text-6xl font-bold md:text-9xl animate-fade-down animate-once animate-duration-[2000ms] uppercase font-title">
            <span className="text-primary">City</span> Hotel
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PagesHero;
