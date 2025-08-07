import { GiMicrophone } from "react-icons/gi";
import {
  MdFreeBreakfast,
  MdOutlinePool,
  MdOutlineSpa,
  MdWifi,
} from "react-icons/md";
import Carousel from "./Slider";
import Titles from "./Titles";

const Services = () => {
  return (
    <div className="w-full bg-white py-10">
      <div className="container flex flex-col items-center justify-evenly min-h-screen gap-20 mx-auto py-20">
        {/* Titulos */}
        <div className="flex items-baseline-last justify-between w-full">
          <div className="flex flex-col items-start gap-10">
            <Titles
              title="Contamos con todo lo que necesitas"
              subtitle="Nuestros servicios"
            />
            <p className="max-w-xl text-lg">
              En nuestro hotel, cada servicio está pensado para que disfrutes
              una estadía sin preocupaciones, rodeado de confort y atención
              personalizada. Nos esforzamos en brindarte una experiencia única,
              combinando lo mejor del descanso con los beneficios naturales de
              las aguas termales.
            </p>
          </div>
          {/* Iconos */}
          <div className="flex items-center gap-16">
            <div className="flex flex-col items-center intersect:animate-fade-down intersect:animate-once">
              <MdOutlinePool className="text-7xl text-primary" />
              <p className="text-xl font-semibold text-dark/75">Piletas</p>
            </div>
            <div className="flex flex-col items-center intersect:animate-fade-down intersect:animate-once intersect:animate-delay-100">
              <MdOutlineSpa className="text-7xl text-primary" />
              <p className="text-xl font-semibold text-dark/75">Spa</p>
            </div>
            <div className="flex flex-col items-center intersect:animate-fade-down intersect:animate-once intersect:animate-delay-200">
              <MdFreeBreakfast className="text-7xl text-primary" />
              <p className="text-xl font-semibold text-dark/75">Desayuno</p>
            </div>
            <div className="flex flex-col items-center intersect:animate-fade-down intersect:animate-once intersect:animate-delay-300">
              <MdWifi className="text-7xl text-primary" />
              <p className="text-xl font-semibold text-dark/75">Wifi</p>
            </div>
            <div className="flex flex-col items-center intersect:animate-fade-down intersect:animate-once intersect:animate-delay-400">
              <GiMicrophone className="text-7xl text-primary" />
              <p className="text-xl font-semibold text-dark/75">Shows</p>
            </div>
          </div>
        </div>
        <Carousel />
      </div>
    </div>
  );
};

export default Services;
