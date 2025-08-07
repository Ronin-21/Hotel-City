import Image from "next/image";
import { BiHotel, BiShower, BiTv, BiWifi } from "react-icons/bi";
import MyButton from "./MyButton";

interface RoomCardProps {
  title: string;
  description: string;
  image: string;
}

const RoomCard = ({ title, description, image }: RoomCardProps) => {
  return (
    <div className="flex flex-col items-center w-full overflow-hidden bg-white rounded-xl shadow-lg/30 h-[600px] group hover:scale-105 transition-transform duration-400">
      <div className="h-full w-full relative overflow-hidden">
        <Image
          src={image || "/default-room.jpg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-600 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="flex flex-col w-full items-start justify-between gap-2 p-6 h-full">
        <p className="mt-3 text-2xl font-bold">{title}</p>
        <p>{description}</p>
        <div className="flex items-center gap-5 mt-5 text-3xl text-primary">
          <BiWifi />
          <BiTv />
          <BiHotel />
          <BiShower />
        </div>
        <MyButton link={"/habitaciones"} content={"Ver más"} />
      </div>
    </div>
  );
};

export default RoomCard;
