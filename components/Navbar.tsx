import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed z-20 flex items-center justify-center w-full bg-transparent h-40">
      <div className="container relative flex items-center justify-center h-full text-white text-2xl gap-8">
        <Link href={"/"}>Servicios</Link>
        <Link href={"/"}>Galería</Link>
        <Link href={"/"}>
          <Image alt="logo" src={"/LogoCity.png"} height={80} width={80} />
        </Link>
        <Link href={"/"}>Historia</Link>
        <Link href={"/"}>Contacto</Link>
      </div>
    </nav>
  );
};

export default Navbar;
