import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-primary">
      <div className="container flex items-start justify-around h-full pt-16 text-lg text-white">
        <div className="flex flex-col items-start justify-center">
          <Link href={"/"} className="mb-4">
            <Image
              alt="logo"
              src={"/LogoCityNegativo.png"}
              height={80}
              width={80}
            />
          </Link>
          <p>Av. Belgrano 1500</p>
          <p>Las Termas de Rio Hondo - Sgo. del Estero</p>
          <Link
            href={"/"}
            className="px-6 py-2 mt-4 font-semibold text-white transition-colors bg-black rounded-md hover:bg-white hover:text-dark text-base"
          >
            Reservar ahora
          </Link>
        </div>
        <div className="flex flex-col items-start justify-center gap-2">
          <p className="mb-4 text-2xl font-semibold">Links</p>
          <Link href={"/"}>Servicios</Link>
          <Link href={"/"}>Historia</Link>
          <Link href={"/"}>Galería</Link>
        </div>
        <div className="flex flex-col items-start justify-center gap-2">
          <p className="mb-4 text-2xl font-semibold">Ayuda</p>
          <Link href={"/"}>Habitaciones</Link>
          <Link href={"/"}>Politica de privacidad</Link>
          <Link href={"/"}>Contacto</Link>
        </div>
        <div className="flex flex-col items-start justify-center gap-2">
          <p className="mb-4 text-2xl font-semibold">Contáctos</p>
          <p>+54 9 3858 480489</p>
          <p>hotelcity@info.com.ar</p>
          <p className="mt-4 text-xl font-semibold">Redes</p>
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
      </div>
      {/* Derechos y Autoria */}
      <div className="py-3 text-center border-t border-dark/50">
        <p className="text-white">
          © 2025 Hotel Ambassador · Todos los derechos reservados · Sitio
          desarrollado por Ronin WebDesign
        </p>
      </div>
    </div>
  );
};

export default Footer;
