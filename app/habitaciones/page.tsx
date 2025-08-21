import PagesHero from "@/components/PagesHero";
import RoomGallery from "./components/RoomGallery";
import RoomServices from "./components/RoomServices";
import WhatsappButton from "@/components/WhatsappButton";

export default function RoomsPage() {
  return (
    <main>
      <PagesHero bgUrl="/room-hero.webp" />
      <RoomGallery />
      <RoomServices />
      <WhatsappButton />
    </main>
  );
}
