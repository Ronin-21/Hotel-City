import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import MyButton from "./MyButton";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-dark">
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
          <MyButton content="Reservar ahora" link="/reservas" />
          <div className="flex items-center justify-between gap-4 text-2xl mt-4">
            <Link
              href={"/"}
              className="hover:text-primary transition-colors duration-100"
            >
              <FaFacebookF />
            </Link>
            <Link
              href={"/"}
              className="hover:text-primary transition-colors duration-100"
            >
              <FaInstagram />
            </Link>
            <Link
              href={"/"}
              className="hover:text-primary transition-colors duration-100"
            >
              <FaTiktok />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="mb-4 text-2xl font-semibold">Links</p>
          <Link
            href={"/reservas"}
            className="hover:text-primary transition-colors duration-100"
          >
            Servicios
          </Link>
          <Link
            href={"/nosotros"}
            className="hover:text-primary transition-colors duration-100"
          >
            Historia
          </Link>
          <Link
            href={"/galeria"}
            className="hover:text-primary transition-colors duration-100"
          >
            Galería
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="mb-4 text-2xl font-semibold">Ayuda</p>
          <Link
            href={"/habitaciones"}
            className="hover:text-primary transition-colors duration-100"
          >
            Habitaciones
          </Link>
          <Link
            href={"/"}
            className="hover:text-primary transition-colors duration-100"
          >
            Politica de privacidad
          </Link>
          <Link
            href={"/contacto"}
            className="hover:text-primary transition-colors duration-100"
          >
            Contacto
          </Link>
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
      <div className="pb-8 pt-6 mt-2 text-center  border-primary/50 border-t-2">
        <p className="text-white">
          © 2025 Hotel City · Todos los derechos reservados · Sitio desarrollado
          por
          <Link
            href={"https://ronin-webdesign.vercel.app/"}
            target="_blank"
            className="text-primary hover:font-semibold transition-all duration-100"
          >
            {" "}
            Ronin WebDesign{" "}
          </Link>
          · Powered by
          <Link
            href={"https://www.aldereteinformatica.com.ar"}
            target="_blank"
            className="text-primary hover:font-semibold transition-all duration-100"
          >
            {" "}
            Alderete Informática
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
