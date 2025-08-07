import Titles from "@/components/Titles";
import Image from "next/image";
import { FaTheaterMasks } from "react-icons/fa";
import { IoIosFitness, IoIosRestaurant } from "react-icons/io";
import { MdOutlinePool, MdOutlineSpa, MdWifi } from "react-icons/md";

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

const AboutBody = () => {
  return (
    <div className="container flex flex-col items-center gap-10 mx-auto my-20">
      {/* Intro */}
      <div className="flex items-center justify-between w-7xl min-h-[600px]">
        <div className="flex flex-col gap-8">
          <Titles
            title="Gattella Industria Turística"
            subtitle="Nuesta Historia"
          />
          <p className="text-dark max-w-2xl mt-10 text-lg">
            Desde nuestros orígenes en el corazón de Termas de Río Hondo, fuimos
            testigos del crecimiento de esta ciudad como capital termal de
            Argentina. Hoy, siendo parte del legado de Gattella Industria
            Turística, nuestra misión sigue siendo ofrecer un lugar donde
            tradición, descanso y bienestar se encuentren en cada detalle. Aquí,
            tus sentidos se reconectan con la energía sanadora del agua,
            mientras vivís la hospitalidad genuina de nuestra gente.
          </p>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <Image
            src="/LogoGattella.png"
            alt="Logo Gattella"
            width={200}
            height={200}
            className="w-64 h-64 object-cover rounded-full shadow-lg shadow-primary/50 animate-bounce animate-infinite animate-duration-[5000ms]"
          />
        </div>
      </div>
      {/* Imagenes */}
      <div className="relative container mx-auto h-[500px] my-20">
        <Image
          src="/lobby-7.jpg"
          alt="Sobre Nosotros"
          width={500}
          height={300}
          className="w-[500px] h-[400px] object-cover rounded-lg shadow-lg absolute top-60 left-50 -translate-y-1/2 shadow-black/50 blur-[2px]"
        />
        <Image
          src="/bar-1.png"
          alt="Sobre Nosotros"
          width={500}
          height={300}
          className="w-[600px] h-full rounded-lg shadow-lg shadow-black/50 absolute top-0 left-50 translate-x-1/2 object-cover z-10"
        />
        <Image
          src="/outside-4.png"
          alt="Sobre Nosotros"
          width={500}
          height={300}
          className="w-[500px] h-[400px] object-cover rounded-lg shadow-lg absolute top-60 right-50 -translate-y-1/2 shadow-black/50 blur-[2px]"
        />
      </div>
      {/* Servicios */}
      <div className="flex flex-col items-center container gap-10 my-20 text-center">
        <h2 className="text-5xl text-primary font-semibold font-title max-w-3xl">
          Todo lo que necesitás para una estadía inolvidable
        </h2>
        <p className="text-lg max-w-2xl text-balance">
          En nuestro hotel, cada servicio está pensado para que disfrutes una
          estadía sin preocupaciones, rodeado de confort y atención
          personalizada.
        </p>
        {/* Iconos */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 w-6xl justify-items-center mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white shadow-lg hover:shadow-black/50 transition-all duration-200 rounded-md hover:border-b-4 border-primary max-w-xs"
            >
              <div className="text-5xl text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-dark/60 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutBody;
