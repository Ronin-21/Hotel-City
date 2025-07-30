"use client";

import { useState } from "react";

type TabKey = "habitaciones" | "restaurante" | "spa" | "eventos";

interface Tab {
  key: TabKey;
  label: string;
}

const tabs: Tab[] = [
  { key: "habitaciones", label: "Habitaciones" },
  { key: "restaurante", label: "Restaurante" },
  { key: "spa", label: "Spa & Piscina" },
  { key: "eventos", label: "Eventos" },
];

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
      </div>
    </div>
  );
};

export default GallerieBody;
