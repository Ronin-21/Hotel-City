import PagesHero from "@/components/PagesHero";
import WhatsappButton from "@/components/WhatsappButton";

export default function Reservations() {
  return (
    <main>
      <PagesHero bgUrl="/outside.webp" />
      <div className="container flex flex-col items-center justify-center gap-10 mx-auto md:my-20 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-4xl sm:text-5xl font-bold text-primary font-title text-shadow-sm text-shadow-dark/30 text-center">
          Reservá tu descanso ideal
        </h2>
        <p className="text-center text-gray-700 max-w-2xl mb-10 text-base sm:text-lg px-2">
          Elegí la habitación perfecta para vos y asegurá tu lugar en uno de los
          destinos termales más reconocidos de Argentina. Reservá en pocos
          pasos, sin complicaciones.
        </p>
        <div
          className="w-full rounded-xl overflow-hidden shadow-lg md:mt-10"
          style={{ maxWidth: "1200px", height: "auto" }}
        >
          <iframe
            src="https://wubook.net/nneb/bk?f=today&n=1&ep=30d47ca5&o=1.0.0.0"
            title="Motor de reservas Ambassador"
            className="w-full h-[600px] sm:h-[700px] md:h-[800px] border-0"
            loading="lazy"
          />
        </div>
      </div>
      <WhatsappButton />
    </main>
  );
}
