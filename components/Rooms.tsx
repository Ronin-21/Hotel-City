import Image from "next/image";
import Link from "next/link";
import { BiTv, BiWifi, BiShower, BiHotel } from "react-icons/bi";

const Rooms = () => {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen gap-3 mx-auto my-20">
      <h4 className="self-start text-3xl">Nuestras Habitaciones</h4>
      <h3 className="self-start text-5xl font-bold text-primary font-title">
        Bienestar Asegurado
      </h3>
      <div className="grid w-full grid-cols-1 gap-20 mt-16 md:grid-cols-2 lg:grid-cols-3">
        {/* Card */}
        <div className="flex flex-col items-center w-full overflow-hidden bg-white rounded-xl shadow-lg/30">
          <div className="h-[350px] w-full relative">
            <Image
              src="/room-2.jpg"
              alt="Room 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-start justify-between gap-2 p-6">
            <p className="mt-3 text-2xl font-bold">Title</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
              praesentium earum, ea voluptatibus quam repellendus eaque harum
              totam ex est odio neque
            </p>
            <div className="flex items-center gap-5 mt-5 text-3xl text-primary">
              <BiWifi />
              <BiTv />
              <BiHotel />
              <BiShower />
            </div>
            <Link
              href={"/"}
              className="px-6 py-2 mt-5 text-lg font-semibold text-white transition-colors bg-black rounded-md hover:bg-primary"
            >
              Ver más
            </Link>
          </div>
        </div>
        {/* Card */}
        <div className="flex flex-col items-center w-full overflow-hidden bg-white rounded-xl shadow-lg/30">
          <div className="h-[350px] w-full relative">
            <Image
              src="/room-1.jpg"
              alt="Room 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-start justify-between gap-2 p-6">
            <p className="mt-3 text-2xl font-bold">Title</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
              praesentium earum, ea voluptatibus quam repellendus eaque harum
              totam ex est odio neque
            </p>
            <div className="flex items-center gap-5 mt-5 text-3xl text-primary">
              <BiWifi />
              <BiTv />
              <BiHotel />
              <BiShower />
            </div>
            <Link
              href={"/"}
              className="px-6 py-2 mt-5 text-lg font-semibold text-white transition-colors bg-black rounded-md hover:bg-primary"
            >
              Ver más
            </Link>
          </div>
        </div>
        {/* Card */}
        <div className="flex flex-col items-center w-full overflow-hidden bg-white rounded-xl shadow-lg/30">
          <div className="h-[350px] w-full relative">
            <Image
              src="/room-3.jpg"
              alt="Room 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-start justify-between gap-2 p-6">
            <p className="mt-3 text-2xl font-bold">Title</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
              praesentium earum, ea voluptatibus quam repellendus eaque harum
              totam ex est odio neque
            </p>
            <div className="flex items-center gap-5 mt-5 text-3xl text-primary">
              <BiWifi />
              <BiTv />
              <BiHotel />
              <BiShower />
            </div>
            <Link
              href={"/"}
              className="px-6 py-2 mt-5 text-lg font-semibold text-white transition-colors bg-black rounded-md hover:bg-primary"
            >
              Ver más
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
