import Carousel from "@/components/Slider";
import Titles from "@/components/Titles";
import Image from "next/image";

const AboutBody = () => {
  return (
    <div className="container flex flex-col items-center gap-10 mx-auto my-20 pb-20">
      {/* Intro */}
      <div className="flex items-center justify-between w-7xl min-h-[600px]">
        <div className="flex flex-col gap-8">
          <Titles title="City Hotel Termal" subtitle="Nuesta Historia" />
          <p className="text-dark max-w-2xl mt-10 text-lg">
            Desde nuestros orígenes en el corazón de Termas de Río Hondo, fuimos
            testigos del crecimiento de esta ciudad como capital termal de
            Argentina. Hoy, siendo parte del legado de Gattella Industria
            Turística, nuestra misión sigue siendo ofrecer un lugar donde
            tradición, descanso y bienestar se encuentren en cada detalle. Aquí,
            tus sentidos se reconectan con la energía sanadora del agua,
            mientras vivís la hospitalidad genuina de nuestra gente.
          </p>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <Image
            src="/LogoGattella.png"
            alt="Logo Gattella"
            width={200}
            height={200}
            className="w-64 h-64 object-cover rounded-full shadow-lg shadow-primary/50 animate-bounce animate-infinite animate-duration-[5000ms]"
          />
        </div>
      </div>
      {/* Imagenes */}
      <div className="relative container mx-auto h-[500px] my-20">
        <Image
          src="/lobby-7.jpg"
          alt="Sobre Nosotros"
          width={500}
          height={300}
          className="w-[500px] h-[400px] object-cover rounded-lg shadow-lg absolute top-60 left-50 -translate-y-1/2 shadow-black/50 blur-[2px]"
        />
        <Image
          src="/bar-1.png"
          alt="Sobre Nosotros"
          width={500}
          height={300}
          className="w-[600px] h-full rounded-lg shadow-lg shadow-black/50 absolute top-0 left-50 translate-x-1/2 object-cover z-10"
        />
        <Image
          src="/outside-4.png"
          alt="Sobre Nosotros"
          width={500}
          height={300}
          className="w-[500px] h-[400px] object-cover rounded-lg shadow-lg absolute top-60 right-50 -translate-y-1/2 shadow-black/50 blur-[2px]"
        />
      </div>
      <Titles
        subtitle="Nuestros Huéspedes Opinan"
        title="Experiencias reales, momentos inolvidables"
      />
      <p className="max-w-2xl text-lg self-start mb-10">
        Cada visita al Hotel City es única, pero todas comparten algo en común:
        la calidez, el confort y el recuerdo de una estadía que vale la pena
        repetir. Descubre lo que nuestros huéspedes tienen para contar.
      </p>
      <Carousel />
    </div>
  );
};

export default AboutBody;
