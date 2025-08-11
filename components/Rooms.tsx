import Image from "next/image";
import Titles from "./Titles";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Rooms = () => {
  return (
    <div className="w-full bg-white py-20">
      <div className="container flex flex-col items-center gap-20 mx-auto md:my-20">
        {/* Títulos */}
        <div className="flex flex-col self-start gap-6 text-center md:text-left px-4 md:px-0">
          <Titles
            title="Bienestar Asegurado"
            subtitle="Nuestras Habitaciones"
          />
          <p className="max-w-xl text-base md:text-lg">
            Elegí la habitación perfecta para vos y asegurá tu lugar en uno de
            los destinos termales más reconocidos de Argentina. Reservá en pocos
            pasos, sin complicaciones.
          </p>
        </div>

        {/* Imagen + Caja de texto */}
        <div className="relative w-full md:h-[450px] h-[500px] md:mb-20">
          <Image alt="" src={"/room-11.png"} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/30"></div>
          {/* CTA */}

          <div className="absolute -translate-y-1/2 translate-x-1/2 md:translate-x-0 top-1/2 md:right-1/12 right-1/2 w-11/12 md:w-[600px] h-[350px] md:h-[600px] bg-dark rounded-lg shadow-xl shadow-black/30 z-10 flex flex-col md:gap-5 gap-2 items-center justify-center text-white px-10 text-shadow-sm text-shadow-black/75 text-center">
            <p className="text-3xl md:text-5xl font-title text-primary font-semibold intersect:animate-fade-down intersect:animate-duration-[3000ms]">
              Elegí tu habitación
            </p>
            <p className="text-lg md:text-xl font-semibold intersect:animate-fade-down intersect:animate-duration-[2000ms]">
              Cada detalle pensado para vos
            </p>
            <p className="text-sm md:text-base tracking-wide leading-6 intersect:animate-fade-down intersect:animate-duration-[1000ms]">
              Desde habitaciones estándar hasta opciones superiores, con
              diferentes planes de comidas, tenemos la estadía perfecta para tu
              viaje. Elegí la que mejor se adapte a vos y disfrutá de la
              comodidad que merecés.
            </p>
            <Link
              href={"/habitaciones"}
              className="text-base md:text-lg font-medium mt-5 hover:text-primary transition-all duration-200 flex items-center gap-2 hover:scale-105"
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
