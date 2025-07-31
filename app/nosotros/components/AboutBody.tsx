import Image from "next/image";
import { GiMicrophone } from "react-icons/gi";
import {
  MdFreeBreakfast,
  MdOutlinePool,
  MdOutlineSpa,
  MdWifi,
} from "react-icons/md";

const AboutBody = () => {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen gap-10 mx-auto my-20">
      <h2 className="text-5xl text-primary font-semibold font-title">
        Sobre Nosotros
      </h2>
      <p className="text-center text-gray-700 max-w-2xl mb-10 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illum
        dicta cupiditate, laudantium voluptatem animi ipsam nemo laboriosam
        impedit voluptates!
      </p>
      <div className="relative container mx-auto h-[500px]">
        <Image
          src="/lobby-7.jpg"
          alt="Sobre Nosotros"
          width={500}
          height={300}
          className="w-[500px] h-[400px] object-cover rounded-lg shadow-lg absolute top-60 left-50 -translate-y-1/2 shadow-black/50 blur-[2px]"
        />
        <Image
          src="/bar-1.png"
          alt="Sobre Nosotros"
          width={500}
          height={300}
          className="w-[600px] h-full rounded-lg shadow-lg shadow-black/50 absolute top-0 left-50 translate-x-1/2 object-cover z-10"
        />
        <Image
          src="/outside-4.png"
          alt="Sobre Nosotros"
          width={500}
          height={300}
          className="w-[500px] h-[400px] object-cover rounded-lg shadow-lg absolute top-60 right-50 -translate-y-1/2 shadow-black/50 blur-[2px]"
        />
      </div>
      <div className="flex flex-col items-center max-w-xl gap-8 mt-20">
        <h2 className="text-5xl text-primary font-semibold font-title">
          Nuestros Servicios
        </h2>
        <p className="text-lg text-center">
          Disfruta de una estancia lujosa en nuestra habitación Deluxe, equipada
          con todas las comodidades modernas y un diseño elegante. Ideal para
          relajarse después de un día explorando la ciudad.
        </p>
        <div className="flex items-center gap-16 mt-10">
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
    </div>
  );
};

export default AboutBody;
