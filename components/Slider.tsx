"use client";
import clsx from "clsx"; // Para aplicar clases condicionales
import Image from "next/image";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const testimonials = [
  {
    img: "/outside-2.png",
    text: "El mejor hotel en el que me he hospedado. Servicio excelente e instalaciones de primera.",
    name: "Juan Pérez",
    location: "Córdoba",
    avatar: "/user-default.png",
  },
  {
    img: "/outside-6.jpg",
    text: "Una experiencia inolvidable. Todo el personal fue muy amable. ¡Volveré pronto!",
    name: "Lucía González",
    location: "Buenos Aires",
    avatar: "/user-default.png",
  },
  {
    img: "/outside-5.png",
    text: "Ubicación perfecta, excelente comida y un spa que te deja nuevo. Lo recomiendo 100%.",
    name: "Martín Romero",
    location: "Rosario",
    avatar: "/user-default.png",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 500,
    pauseOnHover: true,
    beforeChange: (_: number, next: number) => {
      setFade(true); // Oculta con fade-out
      setTimeout(() => {
        setCurrent(next); // Cambia testimonio
        setFade(false); // Vuelve a mostrar con fade-in
      }, 300); // Tiempo del fade-out
    },
  };

  const t = testimonials[current];

  return (
    <div className="flex items-center justify-center w-full gap-20 px-10">
      {/* Slider de imágenes */}
      <Slider
        ref={sliderRef}
        {...settings}
        className="w-full max-w-3xl shadow-md shadow-black/50 rounded-lg h-[300px] md:h-[450px]"
      >
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="relative w-full h-[300px] md:h-[450px] overflow-hidden rounded-lg"
          >
            <Image
              src={item.img}
              fill
              alt={`Imagen hotel ${i + 1}`}
              className="object-cover cursor-grab"
              sizes="(max-width: 768px) 100vw, 700px"
              priority={i === 0}
            />
          </div>
        ))}
      </Slider>

      {/* Testimonio sincronizado */}
      <div
        className={clsx(
          "transition-opacity duration-500 ease-in-out max-w-2xl text-center flex flex-col items-center gap-6",
          fade ? "opacity-0" : "opacity-100"
        )}
      >
        <p className="text-lg leading-relaxed text-pretty">
          &quot;{t.text}&quot;
        </p>
        <div className="flex items-center gap-4">
          <Image
            src={t.avatar}
            width={65}
            height={65}
            alt={`Avatar de ${t.name}`}
            className="rounded-full"
          />
          <div className="text-left">
            <p className="text-xl font-semibold">{t.name}</p>
            <p className="text-sm text-gray-500">{t.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
