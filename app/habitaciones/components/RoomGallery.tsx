"use client";

import MyButton from "@/components/MyButton";
import Image from "next/image";
import Link from "next/link";
import { FaBath, FaRegSnowflake, FaShower, FaTv } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";
import { IoBed } from "react-icons/io5";
import Slider from "react-slick";

const roomStandard = [
  {
    img: "/room-2.jpg",
  },
  {
    img: "/room-3.jpg",
  },
  {
    img: "/room-10.png",
  },
];

const roomSuperior = [
  {
    img: "/room-1.jpg",
  },
  {
    img: "/room-6.png",
  },
  {
    img: "/room-8.png",
  },
];

const RoomGallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 500,
    pauseOnHover: true,
  };

  return (
    <div className="container flex flex-col items-center justify-center gap-60 mx-auto my-60">
      {/* Habitacion Superior */}
      <div className="flex items-center w-full justify-center gap-10 relative">
        <Slider
          {...settings}
          className="w-[700px] shadow-md shadow-black/50 rounded-lg h-[450px]"
        >
          {roomSuperior.map((room, i) => (
            <div
              key={i}
              className="relative w-[700px] h-[450px] rounded-lg overflow-hidden"
            >
              <Image
                src={room.img}
                alt={`Imagen hotel ${i + 1}`}
                fill
                className="object-cover cursor-grab"
              />
            </div>
          ))}
        </Slider>
        <div className="flex flex-col items-center justify-center text-center gap-8 max-w-xl text-white">
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
        <div className="absolute right-0 w-[800px] h-[600px] bg-dark -z-10"></div>
      </div>
      {/* Habitacion Estandard */}
      <div className="flex flex-row-reverse items-center w-full justify-center gap-10 relative">
        <Slider
          {...settings}
          className="w-[700px] shadow-md shadow-black/50 rounded-lg h-[450px]"
        >
          {roomStandard.map((room, i) => (
            <div
              key={i}
              className="relative w-[700px] h-[450px] rounded-lg overflow-hidden"
            >
              <Image
                src={room.img}
                alt={`Imagen hotel ${i + 1}`}
                fill
                className="object-cover cursor-grab"
              />
            </div>
          ))}
        </Slider>
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
        <div className="absolute left-0 w-[800px] h-[600px] bg-primary/50 -z-10"></div>
      </div>
    </div>
  );
};

export default RoomGallery;
