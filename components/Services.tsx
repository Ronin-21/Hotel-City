import Link from "next/link";
import { FaTheaterMasks } from "react-icons/fa";
import { IoIosFitness, IoIosRestaurant } from "react-icons/io";
import { MdOutlinePool, MdOutlineSpa, MdWifi } from "react-icons/md";
import Titles from "./Titles";

const services = [
  {
    icon: <MdOutlinePool />,
    title: "Piscinas",
    description: "Piscinas internas y externas con agua termal",
  },
  {
    icon: <IoIosRestaurant />,
    title: "Restaurante & Bar",
    description:
      "Restaurante con menú regional e internacional, y bar con coctelería de autor.",
  },
  {
    icon: <MdWifi />,
    title: "Wi-Fi",
    description:
      "Wi-Fi de alta velocidad en todo el hotel para que te mantengas conectado.",
  },
  {
    icon: <IoIosFitness />,
    title: "Gimnasio",
    description:
      "Gimnasio equipado con máquinas de última generación y clases dirigidas.",
  },
  {
    icon: <MdOutlineSpa />,
    title: "Spa & Relax",
    description:
      "Spa con sauna seco, húmedo y masajes relajantes y terapéuticos.",
  },
  {
    icon: <FaTheaterMasks />,
    title: "Actividades Recreativas",
    description: "Shows y actividades recreativas durante la temporada alta.",
  },
];

const Services = () => {
  return (
    <div className="container flex flex-col items-center justify-evenly gap-20 mx-auto md:my-20 py-20 px-4">
      {/* Servicios */}
      <div className="flex flex-col md:self-start gap-8 max-w-3xl">
        <Titles
          title="Contamos con todo lo que necesitas"
          subtitle="Nuestros servicios"
        />
        <p className="text-base sm:text-lg text-dark/60 text-center md:text-left">
          En nuestro hotel, cada servicio está pensado para que disfrutes una
          estadía sin preocupaciones, rodeado de confort y atención
          personalizada.
        </p>
      </div>
      {/* Iconos */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 w-full max-w-7xl justify-items-center px-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white shadow-lg hover:shadow-black/50 transition-all duration-200 rounded-md hover:border-b-4 border-primary max-w-xs group gap-4"
          >
            <div className="text-4xl sm:text-5xl text-primary">
              {service.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold">
              {service.title}
            </h3>
            <p className="text-dark/50 text-center text-sm sm:text-base">
              {service.description}
            </p>
            <Link
              href={"/reservas"}
              className="text-base sm:text-lg font-medium hover:text-primary transition-colors duration-200 group-hover:animate-fade-right group-hover:animate-duration-[2000ms] mt-4"
            >
              Reservar
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
