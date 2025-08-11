import Image from "next/image";
import Link from "next/link";
import Titles from "./Titles";

const Gallery = () => {
  return (
    <div className="container flex flex-col items-start justify-center mx-auto py-10 md:py-20 my-10 md:my-20 px-4">
      {/* Titulos */}
      <div className="flex flex-col items-start gap-6 md:gap-10">
        <Titles
          title="Comodidad, descanso y bienestar"
          subtitle="Nuestras Instalaciones"
        />
        <p className="max-w-2xl text-base md:text-lg text-center md:text-left">
          Explorá nuestra galería de imágenes y sentí la experiencia antes de
          vivirla. Desde nuestras cómodas habitaciones y áreas comunes hasta las
          relajantes piscinas termales y espacios verdes.
        </p>
      </div>

      {/* Galeria */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4 w-full mt-12 md:mt-20">
        {/* Card 1 */}
        <div className="flex flex-col items-center w-full overflow-hidden rounded-lg group">
          <div className="h-56 md:h-[350px] w-full relative overflow-hidden">
            <Link href="/galeria">
              <Image
                alt="img"
                src="/lobby-1.jpg"
                fill
                className="object-cover transition-transform duration-600 group-hover:scale-110"
              />
            </Link>
          </div>
          <div className="flex flex-col items-start gap-2 mt-3">
            <p className="text-lg md:text-2xl font-bold">
              Sabores que reconfortan
            </p>
            <p className="text-sm md:text-base">
              Disfrutá de una experiencia gastronómica con identidad regional.
              Además, podés disfrutar de desayunos completos, meriendas
              artesanales y servicio a la habitación.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center w-full overflow-hidden rounded-lg group md:col-span-2">
          <div className="h-56 md:h-[350px] w-full relative overflow-hidden">
            <Link href="/galeria">
              <Image
                alt="img"
                src="/outside.jpg"
                fill
                className="object-cover transition-transform duration-600 group-hover:scale-110"
              />
            </Link>
          </div>
          <div className="flex flex-col items-start gap-2 mt-3">
            <p className="text-lg md:text-2xl font-bold">
              Reservá tu descanso ideal
            </p>
            <p className="text-sm md:text-base">
              Somos un hotel pensado para quienes buscan algo más que una
              estadía: buscamos que cada huésped se sienta como en casa, rodeado
              de confort, buena atención y la energía sanadora de las aguas
              termales. Nuestra ubicación privilegiada, nuestros servicios y la
              calidez de nuestro equipo hacen de cada visita una experiencia
              única en el norte argentino.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center w-full overflow-hidden rounded-lg group">
          <div className="h-56 md:h-[350px] w-full relative overflow-hidden">
            <Link href="/galeria">
              <Image
                alt="img"
                src="/spa.jpg"
                fill
                className="object-cover transition-transform duration-600 group-hover:scale-110"
              />
            </Link>
          </div>
          <div className="flex flex-col items-start gap-2 mt-3">
            <p className="text-lg md:text-2xl font-bold">Spa Termal</p>
            <p className="text-sm md:text-base">
              Sumergite en un oasis de calma. Relajate en nuestras piscinas
              termales y disfrutá de tratamientos diseñados para renovar cuerpo
              y mente. Porque en Termas de Río Hondo, el bienestar fluye de
              forma natural.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
