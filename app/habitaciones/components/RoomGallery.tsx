import Image from "next/image";
import { BiHotel, BiShower, BiTv, BiWifi } from "react-icons/bi";

const RoomGallery = () => {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen gap-20 mx-auto my-20">
      {/* Galeria de Habitaciones */}
      <div className="flex items-center w-full justify-center gap-10 relative">
        <div className="relative w-[700px] overflow-hidden rounded-lg h-[450px] shadow-lg shadow-black/50">
          <Image src="/room-1.jpg" fill alt="img" className="object-cover" />
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-8 max-w-xl text-dark">
          <h2 className="text-5xl font-bold font-title text-shadow-sm text-shadow-dark/50 text-white">
            Habitación Superior
          </h2>
          <p className="text-lg">
            La Habitación Superior combina diseño moderno con detalles que
            marcan la diferencia. Más amplia, con mejores vistas y servicios
            exclusivos, es perfecta para una experiencia de descanso superior.
            Ideal para escapadas románticas o estadías prolongadas con estilo y
            confort.
          </p>
          <div className="flex items-center justify-evenly w-full mt-5 text-5xl">
            <BiWifi />
            <BiTv />
            <BiHotel />
            <BiShower />
          </div>
        </div>
        <div className="absolute right-0 w-[800px] h-[600px] bg-primary/50 -z-10"></div>
      </div>
    </div>
  );
};

export default RoomGallery;
