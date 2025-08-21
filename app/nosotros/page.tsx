import PagesHero from "@/components/PagesHero";
import TestimonialSlider from "@/app/nosotros/components/TestimonialSlider";
import Titles from "@/components/Titles";
import WhatsappButton from "@/components/WhatsappButton";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      <PagesHero bgUrl="/pool-2.webp" />
      <div className="container max-w-7xl w-full flex flex-col items-center gap-10 mx-auto my-20 pb-20 px-4">
        {/* Intro */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full min-h-[600px] gap-10 md:gap-0 md:w-7xl">
          <div className="flex flex-col gap-8 max-w-xl">
            <Titles title="City Hotel Termal" subtitle="Nuestra Historia" />
            <p className="text-dark md:mt-10 md:text-lg">
              Desde nuestros orígenes en el corazón de Termas de Río Hondo,
              fuimos testigos del crecimiento de esta ciudad como capital termal
              de Argentina. Hoy, siendo parte del legado de Gattella Industria
              Turística, nuestra misión sigue siendo ofrecer un lugar donde
              tradición, descanso y bienestar se encuentren en cada detalle.
              Aquí, tus sentidos se reconectan con la energía sanadora del agua,
              mientras vivís la hospitalidad genuina de nuestra gente.
            </p>
          </div>
          <div className="flex items-center justify-center md:w-1/2">
            <Image
              src="/LogoGattella.png"
              alt="Logo Gattella"
              width={256}
              height={256}
              className="w-52 h-52 md:w-64 md:h-64 rounded-full shadow-lg shadow-primary/50 animate-bounce animate-infinite animate-duration-[5000ms] object-cover"
            />
          </div>
        </div>
        {/* Imágenes */}
        <div className="relative container mx-auto h-[500px] my-20 flex items-center justify-center">
          <Image
            src="/lobby-7.webp"
            alt="Sobre Nosotros"
            width={500}
            height={300}
            className="w-[350px] md:w-[500px] h-[350px] md:h-[400px] object-cover rounded-lg shadow-lg absolute md:top-60 md:left-10 md:-translate-y-1/2 -top-20 shadow-black/50 blur-[2px]"
          />
          <Image
            src="/bar-1.webp"
            alt="Sobre Nosotros"
            width={500}
            height={300}
            className="w-full md:w-[600px] md:h-full h-[400px] rounded-lg shadow-lg shadow-black/50 object-cover z-10"
          />
          <Image
            src="/outside-4.webp"
            alt="Sobre Nosotros"
            width={500}
            height={300}
            className="w-[350px] md:w-[500px] h-[350px] md:h-[400px] object-cover rounded-lg shadow-lg absolute bottom-0 md:top-60 md:right-10 md:-translate-y-1/2 shadow-black/50 blur-[2px]"
          />
        </div>
        {/* Testimonios */}
        <Titles
          subtitle="Nuestros Huéspedes Opinan"
          title="Experiencias reales, momentos inolvidables"
        />
        <p className="max-w-2xl md:text-lg md:self-start md:mb-10">
          Cada visita al Hotel City es única, pero todas comparten algo en
          común: la calidez, el confort y el recuerdo de una estadía que vale la
          pena repetir. Descubre lo que nuestros huéspedes tienen para contar.
        </p>
        <TestimonialSlider />
      </div>
      <WhatsappButton />
    </main>
  );
}
