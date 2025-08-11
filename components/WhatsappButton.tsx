import Image from "next/image";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/+543858537778"
      target="_blank"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-20 p-2 md:p-3 bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-transform duration-300 ease-in-out"
    >
      <Image src="/whatsapp-icon.svg" alt="WhatsApp" width={40} height={40} />
    </a>
  );
};

export default WhatsappButton;
