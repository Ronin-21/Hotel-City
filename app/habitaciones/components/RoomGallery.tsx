import MyButton from "@/components/MyButton";
import Link from "next/link";
import { FaBath, FaRegSnowflake, FaShower, FaTv } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";
import { IoBed } from "react-icons/io5";
import RoomSlider from "./RoomSlider";

const roomStandard = [
  {
    img: "/room-2.webp",
  },
  {
    img: "/room-3.webp",
  },
  {
    img: "/room-10.webp",
  },
];

const roomSuperior = [
  {
    img: "/room-1.webp",
  },
  {
    img: "/room-6.webp",
  },
  {
    img: "/room-8.webp",
  },
];

const RoomGallery = () => {
  return (
    <div className="container flex flex-col items-center justify-center md:gap-60 gap-40 mx-auto md:my-60 my-40">
      {/* Habitacion Superior */}
      <div className="flex flex-col md:flex-row items-center w-full justify-center gap-10 relative">
        <RoomSlider images={roomSuperior} />
        <div className="flex flex-col items-center justify-center text-center gap-8 max-w-xl text-white px-4 md:px-0">
          <h2 className="text-5xl font-bold font-title text-shadow-sm text-shadow-dark/50 text-primary intersect:animate-fade-down intersect:animate-duration-[3000ms]">
            Habitación Superior
          </h2>
          <p className="text-lg intersect:animate-fade-down intersect:animate-duration-[2000ms]">
            La Habitación Superior combina diseño moderno con detalles que
            marcan la diferencia. Más amplia, con mejores vistas y servicios
            exclusivos, es perfecta para una experiencia de descanso superior.
            Ideal para escapadas románticas o estadías prolongadas con estilo y
            confort.
          </p>
          {/* Lista Comodidades */}
          <div className="flex items-center justify-between px-5 w-full font-medium intersect:animate-fade-down intersect:animate-duration-[1000ms]">
            <div className="flex flex-col items-start justify-between gap-4">
              <div className="flex gap-3 items-center">
                <FaTv className="text-4xl text-primary" />
                <p>TV por Cable</p>
              </div>
              <div className="flex gap-3 items-center">
                <IoIosBed className="text-4xl text-primary" />
                <p>Cama King Size</p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-between gap-4">
              <div className="flex gap-3 items-center">
                <FaBath className="text-4xl text-primary" />
                <p>Baño Privado con Jacuzzzi</p>
              </div>
              <div className="flex gap-3 items-center">
                <FaRegSnowflake className="text-4xl text-primary" />
                <p>Aire Acondicionado</p>
              </div>
            </div>
          </div>
          <MyButton content="Reservar ahora" link="/reservas" />
        </div>
        <div className="absolute translate-y-36 md:translate-y-0 md:right-0 w-full md:w-[800px] md:h-[600px] h-[650px] bg-dark -z-10"></div>
      </div>
      {/* Habitacion Estandard */}
      <div className="flex flex-col md:flex-row-reverse items-center w-full justify-center gap-10 relative">
        <RoomSlider images={roomStandard} />
        <div className="flex flex-col items-center justify-center text-center gap-8 max-w-xl text-dark">
          <h2 className="text-5xl font-bold font-title text-shadow-sm text-shadow-dark/50 text-white intersect:animate-fade-down intersect:animate-duration-[3000ms]">
            Habitación Estandard
          </h2>
          <p className="text-lg intersect:animate-fade-down intersect:animate-duration-[2000ms]">
            Nuestra Habitación Estándar ofrece todo lo necesario para una
            estadía confortable. Espaciosa, luminosa y equipada con
            climatización, TV, Wi-Fi y baño privado. Ideal para quienes buscan
            practicidad sin perder confort, en un entorno tranquilo y acogedor.
          </p>
          {/* Lista Comodidades */}
          <div className="flex items-center justify-between px-5 w-full font-medium intersect:animate-fade-down intersect:animate-duration-[1000ms]">
            <div className="flex flex-col items-start justify-between gap-4">
              <div className="flex gap-3 items-center">
                <FaTv className="text-4xl text-secondary" />
                <p>TV por Cable</p>
              </div>
              <div className="flex gap-3 items-center">
                <IoBed className="text-4xl text-secondary" />
                <p>Cama Sommier</p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-between gap-4">
              <div className="flex gap-3 items-center">
                <FaShower className="text-4xl text-secondary" />
                <p>Baño Privado</p>
              </div>
              <div className="flex gap-3 items-center">
                <FaRegSnowflake className="text-4xl text-secondary" />
                <p>Aire Acondicionado</p>
              </div>
            </div>
          </div>
          <Link
            href={"/reservas"}
            className="px-6 py-2 mt-5 text-lg font-semibold text-white text-shadow-md text-shadow-black/30 transition-colors rounded-md bg-secondary hover:bg-black shadow-md shadow-black/50 cursor-pointer"
          >
            Reservar ahora
          </Link>
        </div>
        <div className="absolute translate-y-36 md:translate-y-0 md:left-0 w-full md:w-[800px] h-[600px] bg-primary/50 -z-10"></div>
      </div>
    </div>
  );
};

export default RoomGallery;
