import PagesHero from "@/components/PagesHero";
import WhatsappButton from "@/components/WhatsappButton";

export default function Reservations() {
  return (
    <main>
      <PagesHero bgUrl="/outside.webp" />
      <div className="container flex flex-col items-center justify-center gap-10 px-4 py-20 mx-auto md:my-20 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-4xl font-bold text-center sm:text-5xl text-primary font-title text-shadow-sm text-shadow-dark/30">
          Reservá tu descanso ideal
        </h2>
        <p className="max-w-2xl px-2 mb-10 text-base text-center text-gray-700 sm:text-lg">
          Elegí la habitación perfecta para vos y asegurá tu lugar en uno de los
          destinos termales más reconocidos de Argentina. Reservá en pocos
          pasos, sin complicaciones.
        </p>
        <div
          className="w-full overflow-hidden shadow-lg rounded-xl md:mt-10"
          style={{ maxWidth: "1200px", height: "auto" }}
        >
          <iframe
            src="https://wubook.net/nneb/bk?f=today&n=1&ep=30d47ca5&o=1.0.0.0"
            title="Motor de reservas Ambassador"
            className="w-full h-screen border-0"
            loading="lazy"
          />
        </div>
      </div>
      <WhatsappButton />
    </main>
  );
}
