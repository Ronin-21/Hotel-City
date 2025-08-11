import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import MyButton from "./MyButton";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-dark">
      <div className="container flex flex-col md:flex-row items-center md:items-start justify-center md:justify-around gap-10 md:gap-0 h-full pt-10 px-6 md:px-0 text-base md:text-lg text-white">
        {/* Logo y redes */}
        <div className="flex flex-col items-center md:items-center justify-center text-center md:text-left">
          <Link href={"/"}>
            <Image
              alt="logo"
              src={"/LogoCityNegativo.png"}
              height={80}
              width={80}
            />
          </Link>
          <div className="mt-4">
            <MyButton content="Reservar ahora" link="/reservas" />
          </div>
          <div className="flex items-center justify-center gap-4 text-xl md:text-2xl mt-4">
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

        {/* Links */}
        <div className="flex flex-col items-center md:items-center justify-center gap-2 text-center md:text-left">
          <p className="mb-4 text-lg md:text-2xl font-semibold">Links</p>
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
          <Link
            href={"/habitaciones"}
            className="hover:text-primary transition-colors duration-100"
          >
            Habitaciones
          </Link>
        </div>

        {/* Ayuda */}
        <div className="flex flex-col items-center md:items-center justify-center gap-2 text-center md:text-left">
          <p className="mb-4 text-lg md:text-2xl font-semibold">Ayuda</p>
          <Link
            href={"/"}
            className="hover:text-primary transition-colors duration-100"
          >
            Inicio
          </Link>
          <Link
            href={"/contacto"}
            className="hover:text-primary transition-colors duration-100"
          >
            Contacto
          </Link>
          <Link
            href={"/"}
            className="hover:text-primary transition-colors duration-100"
          >
            Política de privacidad
          </Link>
        </div>

        {/* Contactos */}
        <div className="flex flex-col items-center md:items-center justify-center gap-2 text-center md:text-left">
          <p className="mb-4 text-lg md:text-2xl font-semibold">Contáctos</p>
          <p>Av. Manuel Belgrano 245</p>
          <p>Las Termas de Rio Hondo - Sgo. del Estero</p>
          <p>+54 9 3858 42-1018</p>
          <p>reservas@gattellaindustriaturistica.com</p>
        </div>
      </div>

      {/* Derechos y autoría */}
      <div className="pb-8 pt-6 mt-2 text-center border-primary/50 border-t-2 px-4">
        <p className="text-sm md:text-base text-white">
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
