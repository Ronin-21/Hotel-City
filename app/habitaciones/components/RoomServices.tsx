import Image from "next/image";

const roomServices = [
  {
    img: "/breakfast-1.png",
    title: "Con desayuno",
    description:
      "Incluí el desayuno en tu reserva y comenzá cada mañana con una selección de productos frescos: panes caseros, facturas, frutas, cereales, infusiones y jugos.",
  },
  {
    img: "/breakfast-2.png",
    title: "Con media pensión",
    description:
      "Elegí media pensión y disfrutá, además del desayuno, de una cena completa en nuestro restaurante.",
  },
  {
    img: "/breakfast-3.png",
    title: "Con pensión completa",
    description:
      "Con la pensión completa, viví una experiencia sin preocupaciones: desayuno, almuerzo y cena incluidos.",
  },
];

const RoomServices = () => {
  return (
    <div className="w-full bg-white min-h-[700px] flex items-center">
      <div className="container flex items-start justify-between gap-20 mx-auto">
        {/* Intro */}
        <div className="flex flex-col gap-8 items-start justify-center max-w-xs">
          <h2 className="text-5xl font-bold text-primary font-title text-shadow-sm text-shadow-dark/30">
            Sabor Local
          </h2>
          <p className="text-dark">
            En nuestro hotel, cada comida es parte de la experiencia. Desde un
            desayuno fresco y variado para comenzar el día con energía, hasta
            opciones de media pensión y pensión completa que combinan lo mejor
            de la cocina regional.
          </p>
        </div>
        {/* Galeria */}
        <div className="grid grid-cols-1 gap-10 place-content-center md:grid-cols-2 lg:grid-cols-3 w-full">
          {roomServices.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center overflow-hidden h-[450px] rounded-lg group shadow-lg shadow-black/30"
            >
              <div className="min-h-[250px] w-full relative">
                <Image
                  alt="img"
                  src={service.img}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-start justify-start h-full gap-3 p-5 bg-background text-dark">
                <p className="text-xl font-bold">{service.title}</p>
                <p className="text-dark/80">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomServices;
