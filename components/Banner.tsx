import { GiHomeGarage, GiKnifeFork } from "react-icons/gi";
import { Ri24HoursLine } from "react-icons/ri";

const Banner = () => {
  return (
    <div
      className="
        container
        h-[600px] md:h-[350px]
        mx-auto my-10 md:my-20
        bg-[url('/outside-4.webp')]
        bg-cover 
        bg-top md:bg-center
        relative text-white
      "
    >
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-32 bg-black/60 p-4 md:p-0 min-h-full">
        <div className="flex flex-col items-center gap-3 max-w-[250px] text-center">
          <GiKnifeFork className="text-primary text-6xl md:text-8xl" />
          <p className="mt-3 text-xl md:text-2xl font-bold">
            Sabores del Norte
          </p>
          <p className="text-sm md:text-base">Restaurante con menú regional</p>
        </div>

        <div className="flex flex-col items-center gap-3 max-w-[250px] text-center">
          <GiHomeGarage className="text-primary text-6xl md:text-8xl" />
          <p className="mt-3 text-xl md:text-2xl font-bold">
            Cochera Protegida
          </p>
          <p className="text-sm md:text-base">
            Estacionamiento privado y seguro
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 max-w-[250px] text-center">
          <Ri24HoursLine className="text-primary text-6xl md:text-8xl" />
          <p className="mt-3 text-xl md:text-2xl font-bold">
            Siempre a tu lado
          </p>
          <p className="text-sm md:text-base">
            Atención al huésped las 24 horas
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
