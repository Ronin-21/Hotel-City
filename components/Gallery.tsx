import Image from "next/image";

const Gallery = () => {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen mx-auto">
      {/* Titulos */}
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col items-start max-w-2xl gap-3">
          <h4 className="text-3xl">Nuestras Instalaciones</h4>
          <h3 className="text-5xl font-bold text-primary font-title">
            Galería de Imágenes
          </h3>
        </div>
      </div>
      {/* Galeria */}
      <div className="flex items-center justify-between w-full gap-12 mt-20">
        {/* Cards */}
        <div className="flex flex-col items-center max-w-sm overflow-hidden h-[550px] rounded-lg">
          <div className="h-[350px] w-full relative">
            <Image alt="img" src="/lobby-1.jpg" fill className="object-cover" />
          </div>
          <div className="flex flex-col items-start justify-between gap-2">
            <p className="mt-3 text-2xl font-bold">Titulo</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              nesciunt architecto laudantium consequuntur libero dolorem, hic
              expedita impedit aperiam illo.
            </p>
          </div>
        </div>
        {/* Cards */}
        <div className="flex flex-col items-center w-full overflow-hidden grow h-[550px] rounded-lg">
          <div className="h-[350px] w-full relative">
            <Image alt="img" src="/outside.jpg" fill className="object-cover" />
          </div>
          <div className="flex flex-col items-start justify-between gap-2">
            <p className="mt-3 text-2xl font-bold">Titulo</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              nesciunt architecto laudantium consequuntur libero dolorem, hic
              expedita impedit aperiam illo.
            </p>
          </div>
        </div>
        {/* Cards */}
        <div className="flex flex-col items-center max-w-sm overflow-hidden h-[550px] rounded-lg">
          <div className="h-[350px] w-full relative">
            <Image alt="img" src="/spa.jpg" fill className="object-cover" />
          </div>
          <div className="flex flex-col items-start justify-between gap-2">
            <p className="mt-3 text-2xl font-bold">Titulo</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              nesciunt architecto laudantium consequuntur libero dolorem, hic
              expedita impedit aperiam illo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
