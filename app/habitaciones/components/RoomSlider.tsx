"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";

interface RoomImage {
  img: string;
}

interface SliderProps {
  images: RoomImage[];
}

const RoomSlider = ({ images }: SliderProps) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 500,
    pauseOnHover: true,
  };

  return (
    <Slider
      {...settings}
      className="shadow-md shadow-black/50 rounded-lg w-full h-64 md:w-[700px] md:h-[450px]"
    >
      {images.map((item, i) => (
        <div
          key={i}
          className="relative w-full h-64 md:w-[700px] md:h-[450px] rounded-lg overflow-hidden"
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
  );
};

export default RoomSlider;
