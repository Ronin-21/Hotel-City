"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/galeria", label: "Galería" },
    { href: "/habitaciones", label: "Habitaciones" },
    { href: "/reservas", label: "Reservas" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <nav className="absolute z-20 w-full bg-transparent">
      {/* Navbar desktop */}
      <div className="hidden md:flex items-center justify-center h-40 gap-16 text-2xl text-white font-medium">
        {navItems.slice(0, 3).map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <Link href={"/"}>
          <Image alt="logo" src={"/LogoCity.png"} height={80} width={80} />
        </Link>
        {navItems.slice(3).map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>

      {/* Navbar mobile */}
      <div className="flex md:hidden items-center justify-between px-6 py-4 relative z-30">
        <Link href={"/"}>
          <Image alt="logo" src={"/LogoCity.png"} height={60} width={60} />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          className="relative z-40" // <--- z-index alto para botón
        >
          {isOpen ? (
            <MdClose className="text-primary text-4xl" />
          ) : (
            <GiHamburgerMenu className="text-primary text-3xl" />
          )}
        </button>
      </div>

      {/* Menú desplegable */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-dark flex flex-col items-center justify-center gap-8 text-white text-2xl z-20">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
