import Image from "next/image";
import { GiMicrophone } from "react-icons/gi";
import {
  MdFreeBreakfast,
  MdOutlinePool,
  MdOutlineSpa,
  MdWifi,
} from "react-icons/md";

const Services = () => {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen gap-20 mx-auto">
      {/* Titulos */}
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col items-start gap-3">
          <h4 className="text-3xl">Nuestros servicios</h4>
          <h3 className="text-5xl font-bold text-primary font-title">
            Contamos con todo lo que necesitas
          </h3>
          <p className="max-w-lg mt-5 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            temporibus maxime unde alias, tenetur fugiat accusantium quod vitae
            facere odio explicabo quisquam omnis numquam nostrum voluptatibus
            voluptatem eligendi, ea a? Eius, esse!
          </p>
        </div>
        <div className="flex items-center gap-16">
          <div className="flex flex-col items-center">
            <MdOutlinePool className="text-7xl text-primary" />
            <p className="text-xl font-semibold text-dark/75">Piletas</p>
          </div>
          <div className="flex flex-col items-center">
            <MdOutlineSpa className="text-7xl text-primary" />
            <p className="text-xl font-semibold text-dark/75">Spa</p>
          </div>
          <div className="flex flex-col items-center">
            <MdFreeBreakfast className="text-7xl text-primary" />
            <p className="text-xl font-semibold text-dark/75">Desayuno</p>
          </div>
          <div className="flex flex-col items-center">
            <MdWifi className="text-7xl text-primary" />
            <p className="text-xl font-semibold text-dark/75">Wifi</p>
          </div>
          <div className="flex flex-col items-center">
            <GiMicrophone className="text-7xl text-primary" />
            <p className="text-xl font-semibold text-dark/75">Shows</p>
          </div>
        </div>
      </div>
      {/* Fotos y Comentarios */}
      <div className="flex items-center w-full gap-20 justify-evenly">
        <div className="relative w-[700px] overflow-hidden rounded-lg h-[450px]">
          <Image src="/backyard.jpg" fill alt="img" className="object-cover" />
        </div>
        <div className="flex flex-col items-start max-w-xl gap-8">
          <p className="text-lg">
            &quot;El mejor hotel en el que me he hospedado. El servicio es
            excelente y las instalaciones son de primera. El mejor hotel en el
            que me he hospedado. El servicio es excelente y las instalaciones
            son de primera. El mejor hotel en el que me he hospedado. El
            servicio es excelente y las instalaciones son de primera.&quot;
          </p>
          <div className="flex items-center gap-4">
            <Image
              src="/user-default.png"
              width={65}
              height={65}
              alt="avatar"
              className="rounded-full"
            />
            <div>
              <p className="text-xl font-semibold">Juan Pérez</p>
              <p className="text-sm text-dark/50">Córdoba</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
