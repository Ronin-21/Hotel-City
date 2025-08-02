import Image from "next/image";
import Link from "next/link";

const Welcome = () => {
  return (
    <div className="container flex items-center justify-around min-h-screen gap-10 mx-auto">
      <div className="flex flex-col items-start max-w-2xl gap-3">
        <h4 className="text-3xl">Nuestra Historia</h4>
        <h3 className="text-5xl font-bold text-primary font-title">
          Bienvenido a Hotel City
        </h3>
        <p className="mt-5 text-lg">
          En Hotel City, te ofrecemos una experiencia única de lujo y confort.
          Disfruta de nuestras instalaciones de primera clase, servicio
          excepcional y una ubicación inmejorable en el corazón de la ciudad.
        </p>
        <p className="text-lg">
          Explora nuestras habitaciones elegantes, relájate en nuestras áreas
          comunes y descubre todo lo que tenemos para ofrecer. ¡Tu estancia será
          inolvidable!
        </p>
        <Link
          href={"/nosotros"}
          className="px-6 py-2 mt-5 text-lg font-semibold text-white transition-colors rounded-md bg-primary hover:bg-black"
        >
          Ver más
        </Link>
      </div>
      <div className="relative h-[650px] w-md">
        <div className="h-[650px] w-md rounded-lg absolute overflow-hidden shadow-xl top-0 right-0 z-10">
          <Image
            src={"/pool-1.jpg"}
            alt="Welcome Image"
            fill
            className="object-cover"
          />
        </div>
        <div className="h-[450px] w-xs rounded-lg absolute overflow-hidden shadow-xl top-1/5 -left-1/3 z-20">
          <Image
            src={"/bar.jpg"}
            alt="Welcome Image"
            fill
            className="object-cover"
          />
        </div>
        <div className="h-[250px] w-[250px] rounded-lg absolute overflow-hidden shadow-xl -top-1/12 -right-1/6 bg-primary"></div>
      </div>
    </div>
  );
};

export default Welcome;
