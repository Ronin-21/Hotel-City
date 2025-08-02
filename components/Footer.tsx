import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-primary">
      <div className="container flex items-start justify-around h-full pt-10 text-lg text-white">
        <div className="flex flex-col items-center justify-center">
          <Link href={"/"} className="">
            <Image
              alt="logo"
              src={"/LogoCityNegativo.png"}
              height={80}
              width={80}
            />
          </Link>
          <Link
            href={"/reservas"}
            className="px-6 py-2 my-4 font-semibold text-white transition-colors bg-black rounded-md hover:bg-white hover:text-dark text-base"
          >
            Reservar ahora
          </Link>
          {/* <p className="mt-4 text-xl font-semibold">Redes</p> */}
          <div className="flex items-center justify-between gap-4 text-2xl">
            <Link href={"/"}>
              <FaFacebookF />
            </Link>
            <Link href={"/"}>
              <FaInstagram />
            </Link>
            <Link href={"/"}>
              <FaTiktok />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="mb-4 text-2xl font-semibold">Links</p>
          <Link href={"/reservas"}>Servicios</Link>
          <Link href={"/nosotros"}>Historia</Link>
          <Link href={"/galeria"}>Galería</Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="mb-4 text-2xl font-semibold">Ayuda</p>
          <Link href={"/habitaciones"}>Habitaciones</Link>
          <Link href={"/"}>Politica de privacidad</Link>
          <Link href={"/contacto"}>Contacto</Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="mb-4 text-2xl font-semibold">Contáctos</p>
          <p>Av. Manuel Belgrano 245</p>
          <p>Las Termas de Rio Hondo - Sgo. del Estero</p>
          <p>+54 9 3858 42-1018</p>
          <p>hotelcity@info.com.ar</p>
        </div>
      </div>
      {/* Derechos y Autoria */}
      <div className="pb-8 pt-6 mt-2 text-center  border-dark/30 border-t-2">
        <p className="text-white">
          © 2025 Hotel City · Todos los derechos reservados · Sitio desarrollado
          por Ronin WebDesign · Powered by Alderete Informática
        </p>
      </div>
    </div>
  );
};

export default Footer;
