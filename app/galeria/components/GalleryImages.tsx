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
    "/room-1.webp",
    "/room-2.webp",
    "/room-3.webp",
    "/room-4.webp",
    "/room-5.webp",
    "/room-6.webp",
  ],
  patio: [
    "/outside-1.webp",
    "/outside-2.webp",
    "/outside-3.webp",
    "/outside-4.webp",
    "/outside-5.webp",
    "/outside-6.webp",
  ],
  spa: [
    "/pool-1.webp",
    "/pool-4.webp",
    "/pool-3.webp",
    "/pool-2.webp",
    "/spa.webp",
    "/pool-5.webp",
  ],
  salon: [
    "/lobby-2.webp",
    "/lobby-3.webp",
    "/lobby-4.webp",
    "/lobby-5.webp",
    "/lobby-6.webp",
    "/lobby-1.webp",
  ],
};

const GalleryImages = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("habitaciones");

  return (
    <div className="max-w-7xl mx-auto md:mt-10 mt-5">
      {/* Botones de pestañas */}
      <div className="grid grid-cols-4 gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            // aria-selected={activeTab === tab.key}
            className={`py-2 md:px-4 font-semibold text-center border-b-[3px] cursor-pointer transition-all duration-300 overflow-hidden ${
              activeTab === tab.key
                ? "border-primary text-amber-100 bg-gradient-to-r from-primary to-amber-900 rounded-md"
                : "border-transparent text-dark/60 hover:text-primary"
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
  );
};

export default GalleryImages;
