import Image from "next/image";
import Link from "next/link";
import Titles from "./Titles";

const Gallery = () => {
  return (
    <div className="container flex flex-col items-start justify-center min-h-screen mx-auto py-20">
      {/* Titulos */}
      <div className="flex flex-col items-start gap-10">
        <Titles title="Galería de Imágenes" subtitle="Nuestras Instalaciones" />
        <p className="max-w-2xl text-lg">
          Explorá nuestra galería de imágenes y sentí la experiencia antes de
          vivirla. Desde nuestras cómodas habitaciones y áreas comunes hasta las
          relajantes piscinas termales y espacios verdes, cada imagen refleja el
          alma del hotel y la tranquilidad que te espera en Termas de Río Hondo.
        </p>
      </div>
      {/* Galeria */}
      <div className="grid grid-cols-1 gap-10 place-content-center md:grid-cols-3 lg:grid-cols-4 w-full mt-20">
        {/* Cards */}
        <div className="flex flex-col items-center min-w-[350px] overflow-hidden h-[550px] rounded-lg group">
          <div className="h-[350px] w-full relative overflow-hidden">
            <Link href="/galeria">
              <Image
                alt="img"
                src="/lobby-1.jpg"
                fill
                className="object-cover transition-transform duration-600 group-hover:scale-110"
              />
            </Link>
          </div>
          <div className="flex flex-col items-start justify-between gap-2">
            <p className="mt-3 text-2xl font-bold">Sabores que reconfortan</p>
            <p>
              Disfrutá de una experiencia gastronómica con identidad regional.
              Además, podés disfrutar de desayunos completos, meriendas
              artesanales y servicio a la habitación.
            </p>
          </div>
        </div>
        {/* Cards */}
        <div className="flex flex-col items-center w-full overflow-hidden h-[550px] rounded-lg group col-span-2">
          <div className="h-[350px] w-full relative overflow-hidden">
            <Link href="/galeria">
              <Image
                alt="img"
                src="/outside.jpg"
                fill
                className="object-cover transition-transform duration-600 group-hover:scale-110"
              />
            </Link>
          </div>
          <div className="flex flex-col items-start justify-between gap-2">
            <p className="mt-3 text-2xl font-bold">Reservá tu descanso ideal</p>
            <p>
              Somos un hotel pensado para quienes buscan algo más que una
              estadía: buscamos que cada huésped se sienta como en casa, rodeado
              de confort, buena atención y la energía sanadora de las aguas
              termales. Nuestra ubicación privilegiada, nuestros servicios y la
              calidez de nuestro equipo hacen de cada visita una experiencia
              única en el norte argentino.
            </p>
          </div>
        </div>
        {/* Cards */}
        <div className="flex flex-col items-center min-w-[350px] overflow-hidden h-[550px] rounded-lg group">
          <div className="h-[350px] w-full relative overflow-hidden">
            <Link href="/galeria">
              <Image
                alt="img"
                src="/spa.jpg"
                fill
                className="object-cover transition-transform duration-600 group-hover:scale-110"
              />
            </Link>
          </div>
          <div className="flex flex-col items-start justify-between gap-2">
            <p className="mt-3 text-2xl font-bold">Spa Termal</p>
            <p>
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
