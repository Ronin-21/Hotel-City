import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="absolute z-20 flex items-center justify-center w-full h-40 bg-transparent">
      <div className="container relative flex items-center justify-center h-full gap-16 text-2xl text-white font-medium">
        <Link href={"/"}>Servicios</Link>
        <Link href={"/"}>Galería</Link>
        <Link href={"/"}>
          <Image alt="logo" src={"/LogoCity.png"} height={80} width={80} />
        </Link>
        <Link href={"/habitaciones"}>Habitaciones</Link>
        <Link href={"/contacto"}>Contacto</Link>
      </div>
    </nav>
  );
};

export default Navbar;
