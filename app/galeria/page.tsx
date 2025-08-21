import PagesHero from "@/components/PagesHero";
import GalleryImages from "./components/GalleryImages";
import WhatsappButton from "@/components/WhatsappButton";

export default function GalleryPage() {
  return (
    <main>
      <PagesHero bgUrl="/gallerie-hero.webp" />
      <div className="container flex flex-col items-center justify-center min-h-screen gap-10 mx-auto md:my-20 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-primary font-title text-shadow-sm text-shadow-dark/30 text-center md:text-left">
          Descubrí cada rincón de nuestro hotel
        </h2>
        <p className="text-center text-gray-700 max-w-2xl md:mb-10 text-lg">
          Descubre las instalaciones y servicios que ofrecemos en nuestro hotel.
          Desde habitaciones cómodas hasta áreas recreativas, tenemos todo lo
          que necesitas para una estancia inolvidable.
        </p>
        <GalleryImages />
      </div>
      <WhatsappButton />
    </main>
  );
}
