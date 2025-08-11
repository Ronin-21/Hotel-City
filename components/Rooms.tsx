import Image from "next/image";
import Titles from "./Titles";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Rooms = () => {
  return (
    <div className="w-full bg-white py-20">
      <div className="container flex flex-col items-center gap-32 mx-auto my-20">
        <div className="flex flex-col self-start gap-10">
          <Titles
            title="Bienestar Asegurado"
            subtitle="Nuestras Habitaciones"
          />
          <p className="max-w-xl text-lg">
            Elegí la habitación perfecta para vos y asegurá tu lugar en uno de
            los destinos termales más reconocidos de Argentina. Reservá en pocos
            pasos, sin complicaciones.
          </p>
        </div>
        <div className="w-full relative h-[450px] mb-20">
          <Image alt="" src={"/room-11.png"} fill className="object-cover" />
          <div className="absolute w-full bg-black/30 inset-0"></div>
          <div className="absolute right-1/12 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-dark rounded-lg shadow-xl shadow-black/30 z-10 flex flex-col gap-5 items-center justify-center text-white px-10 text-shadow-sm text-shadow-black/75">
            <p className="text-5xl font-title text-primary font-semibold intersect:animate-fade-down intersect:animate-duration-[3000ms]">
              Elegí tu habitación
            </p>
            <p className="text-xl font-semibold intersect:animate-fade-down intersect:animate-duration-[2000ms]">
              Cada detalle pensado para vos
            </p>
            <p className="text-center text-sm tracking-wide leading-6 intersect:animate-fade-down intersect:animate-duration-[1000ms]">
              Desde habitaciones estándar hasta opciones superiores, con
              diferentes planes de comidas, tenemos la estadía perfecta para tu
              viaje. Elegí la que mejor se adapte a vos y disfrutá de la
              comodidad que merecés.
            </p>
            <Link
              href={"/habitaciones"}
              className="text-lg font-medium mt-5 hover:text-primary transition-all duration-200 flex items-center gap-2 hover:scale-105"
            >
              Ver Habitaciones{" "}
              <FaArrowRight className="animate-rotate-x animate-infinite animate-duration-[3000ms]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
