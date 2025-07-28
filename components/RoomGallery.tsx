import Image from "next/image";
import { BiHotel, BiShower, BiTv, BiWifi } from "react-icons/bi";
import MotorReservas from "./MotorReservas";

const RoomGallery = () => {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen gap-20 mx-auto my-20">
      {/* Galeria de Habitaciones */}
      <div className="flex items-start w-full gap-20 justify-evenly">
        <div className="relative w-[700px] overflow-hidden rounded-lg h-[450px]">
          <Image src="/room-1.jpg" fill alt="img" className="object-cover" />
        </div>
        <div className="flex flex-col items-start max-w-xl gap-8">
          <h2 className="text-5xl text-primary font-semibold font-title">
            Habitacion Deluxe
          </h2>
          <p className="text-lg">
            Disfruta de una estancia lujosa en nuestra habitación Deluxe,
            equipada con todas las comodidades modernas y un diseño elegante.
            Ideal para relajarse después de un día explorando la ciudad.
          </p>
          <div className="flex items-center justify-evenly w-full mt-5 text-5xl text-primary">
            <BiWifi />
            <BiTv />
            <BiHotel />
            <BiShower />
          </div>
        </div>
      </div>
      <MotorReservas />
    </div>
  );
};

export default RoomGallery;
