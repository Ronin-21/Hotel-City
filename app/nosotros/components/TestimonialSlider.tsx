"use client";

import clsx from "clsx";
import Image from "next/image";
import { useRef, useState } from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import Slider from "react-slick";

const testimonials = [
  {
    img: "/outside-2.webp",
    text: "El mejor hotel en el que me he hospedado. Servicio excelente e instalaciones de primera.",
    name: "Juan Pérez",
    location: "Córdoba",
    avatar: "/user-default.png",
  },
  {
    img: "/outside-6.webp",
    text: "Una experiencia inolvidable. Todo el personal fue muy amable. ¡Volveré pronto!",
    name: "Lucía González",
    location: "Buenos Aires",
    avatar: "/user-default.png",
  },
  {
    img: "/outside-5.webp",
    text: "Ubicación perfecta, excelente comida y un spa que te deja nuevo. Lo recomiendo 100%.",
    name: "Martín Romero",
    location: "Rosario",
    avatar: "/user-default.png",
  },
];

const TestimonialSlider = () => {
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
      setFade(true);
      setTimeout(() => {
        setCurrent(next);
        setFade(false);
      }, 300);
    },
  };

  const t = testimonials[current];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 px-4 md:px-10 py-10">
      {/* Slider */}
      <div className="w-full max-w-2xl shadow-md shadow-black/50 rounded-lg h-64 md:h-96">
        <Slider ref={sliderRef} {...settings} className="h-full">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden"
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
      </div>

      {/* Testimonio */}
      <div
        className={clsx(
          "transition-opacity duration-500 ease-in-out max-w-xl text-center flex flex-col items-center gap-6 relative px-4",
          fade ? "opacity-0" : "opacity-100"
        )}
      >
        <p className="text-base md:text-lg italic leading-relaxed font-medium z-10">
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
            <p className="text-lg md:text-xl font-semibold">{t.name}</p>
            <p className="text-sm md:text-base text-dark/75">{t.location}</p>
          </div>
        </div>
        <ImQuotesLeft className="absolute text-6xl text-primary/40 -top-10 left-0 hidden md:block" />
        <ImQuotesRight className="absolute text-6xl text-primary/40 bottom-8 right-5 hidden md:block" />
      </div>
    </div>
  );
};

export default TestimonialSlider;
