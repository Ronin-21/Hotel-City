import Image from "next/image";
import MyButton from "./MyButton";
import Titles from "./Titles";

const Welcome = () => {
  return (
    <div className="container flex flex-col md:flex-row items-center justify-between min-h-screen gap-10 mx-auto my-20 px-4">
      {/* Texto y botón */}
      <div className="flex flex-col items-start max-w-2xl gap-10 md:gap-14">
        <Titles title="Bienvenido a City Hotel" subtitle="Sobre Nosotros" />
        <div className="text-base md:text-lg flex flex-col gap-3 text-center md:text-left">
          <p>
            En Hotel City, te ofrecemos una experiencia única de lujo y confort.
            Disfruta de nuestras instalaciones de primera clase, servicio
            excepcional y una ubicación inmejorable en el corazón de la ciudad.
          </p>
          <p>
            Explora nuestras habitaciones elegantes, relájate en nuestras áreas
            comunes y descubre todo lo que tenemos para ofrecer. ¡Tu estancia
            será inolvidable!
          </p>
        </div>
        <MyButton link={"/nosotros"} content={"Ver más"} />
      </div>

      {/* Imágenes posicionadas */}
      <div className="relative w-full md:w-md md:mr-10 h-[400px] md:h-[650px]">
        {/* Imagen principal */}
        <div className="absolute top-0 right-0 h-[400px] md:h-[650px] w-full md:w-[500px] rounded-lg overflow-hidden shadow-xl shadow-black/50 intersect:animate-fade-down intersect:animate-delay-200">
          <Image
            src={"/pool-1.jpg"}
            alt="Welcome Image"
            fill
            className="object-cover"
          />
        </div>

        {/* Imagen secundaria */}
        <div className="absolute top-1/5 left-0 md:-left-1/3 h-[250px] md:h-[450px] w-[250px] md:w-[350px] rounded-lg overflow-hidden shadow-xl shadow-black/70 intersect:animate-fade-right intersect:animate-delay-300">
          <Image
            src={"/bar.jpg"}
            alt="Welcome Image"
            fill
            className="object-cover"
          />
        </div>

        {/* Capa de color decorativa */}
        <div className="absolute -top-10 right-0 md:-top-12 md:-right-24 h-[150px] w-[150px] md:h-[250px] md:w-[250px] rounded-lg bg-primary shadow-primary/50 shadow-xl intersect:animate-fade-left -z-10"></div>
      </div>
    </div>
  );
};

export default Welcome;
