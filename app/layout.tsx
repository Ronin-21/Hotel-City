import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-primary",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const restora = localFont({
  src: "../public/Restora.otf",
  variable: "--font-title",
});

export const metadata: Metadata = {
  title: {
    default: "Hotel City",
    template: "%s - Hotel City",
  },
  description:
    "Descubre el Hotel City, tu refugio de lujo en la ciudad. Disfruta de habitaciones elegantes, servicios excepcionales y una ubicación inmejorable. ¡Reserva ahora y vive una experiencia inolvidable!",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} ${restora.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <script
          defer
          src="https://unpkg.com/tailwindcss-intersect@2.x.x/dist/observer.min.js"
        ></script>
      </body>
    </html>
  );
}
