import { GiHomeGarage, GiKnifeFork } from "react-icons/gi";
import { Ri24HoursLine } from "react-icons/ri";

const Banner = () => {
  return (
    <div className="container h-[350px] mx-auto my-20 bg-[url('/outside-4.png')] bg-cover bg-center relative text-white">
      <div className="absolute inset-0 flex items-center justify-center gap-32 bg-black/60">
        <div className="flex flex-col items-center gap-3 max-w-[250px] text-center">
          <GiKnifeFork className="text-primary text-8xl" />
          <p className="mt-3 text-2xl font-bold">Sabores del Norte</p>
          <p>Restaurante con menú regional</p>
        </div>
        <div className="flex flex-col items-center gap-3 max-w-[250px] text-center">
          <GiHomeGarage className="text-primary text-8xl" />
          <p className="mt-3 text-2xl font-bold w-[260px]">Cochera Protegida</p>
          <p>Estacionamiento privado y seguro</p>
        </div>
        <div className="flex flex-col items-center gap-3 max-w-[250px] text-center">
          <Ri24HoursLine className="text-primary text-8xl" />
          <p className="mt-3 text-2xl font-bold">Siempre a tu lado</p>
          <p>Atención al huésped las 24 horas</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
