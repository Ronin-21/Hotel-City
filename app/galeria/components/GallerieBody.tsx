"use client";

import Image from "next/image";
import { useState } from "react";

type TabKey = "habitaciones" | "patio" | "spa" | "salon";

interface Tab {
  key: TabKey;
  label: string;
}

const tabs: Tab[] = [
  { key: "habitaciones", label: "Habitaciones" },
  { key: "patio", label: "Patio" },
  { key: "spa", label: "Spa & Piscina" },
  { key: "salon", label: "Salón" },
];

const images: Record<TabKey, string[]> = {
  habitaciones: [
    "/room-1.jpg",
    "/room-2.jpg",
    "/room-3.jpg",
    "/room-4.png",
    "/room-5.png",
    "/room-6.png",
  ],
  patio: [
    "/outside-1.png",
    "/outside-2.png",
    "/outside-3.png",
    "/outside-4.png",
    "/outside-5.png",
    "/outside-6.jpg",
  ],
  spa: [
    "/pool-1.jpg",
    "/pool-4.png",
    "/pool-3.png",
    "/pool-2.jpg",
    "/spa.jpg",
    "/pool-5.png",
  ],
  salon: [
    "/lobby-2.png",
    "/lobby-3.png",
    "/lobby-4.png",
    "/lobby-5.png",
    "/lobby-6.png",
    "/lobby-1.jpg",
  ],
};

const GallerieBody = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("habitaciones");

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen gap-10 mx-auto my-20">
      <h2 className="text-5xl text-primary font-semibold font-title">
        Galería
      </h2>
      <p className="text-center text-gray-700 max-w-2xl mb-10 text-lg">
        Descubre las instalaciones y servicios que ofrecemos en nuestro hotel.
        Desde habitaciones cómodas hasta áreas recreativas, tenemos todo lo que
        necesitas para una estancia inolvidable.
      </p>
      {/* Gallery Section */}
      <div className="w-full">
        {/* Botones de pestañas */}
        <div className="grid grid-cols-4 gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`py-2 px-4 font-medium text-center border-b-2 ${
                activeTab === tab.key
                  ? "border-black text-black"
                  : "border-transparent text-gray-500 hover:text-black"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Contenido de cada pestaña */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {images[activeTab].map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg h-80">
              <Image
                src={`${src}?height=400&width=600`}
                alt={"Imagen de " + activeTab}
                width={600}
                height={400}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallerieBody;
