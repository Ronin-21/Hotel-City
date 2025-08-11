import Banner from "@/components/Banner";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Rooms from "@/components/Rooms";
import Services from "@/components/Services";
import Welcome from "@/components/Welcome";
import WhatsappButton from "@/components/WhatsappButton";

export default function Home() {
  return (
    <main>
      <Hero />
      <Welcome />
      <Banner />
      <Services />
      <Rooms />
      <Gallery />
      <WhatsappButton />
    </main>
  );
}
