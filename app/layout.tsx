import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-primary",
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
});

const restora = localFont({
  src: "../public/Restora.woff2",
  variable: "--font-title",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Grand Hotel City | Hotel 3 Estrellas en Termas",
    template: "%s | Grand Hotel City",
  },
  description:
    "Grand Hotel City, un hotel 3 estrellas en Termas, ideal para disfrutar de confort y elegancia. Habitaciones modernas, restaurante gourmet, spa y ubicación privilegiada cerca de los principales atractivos. Reserva online y viví una estadía inolvidable.",
  keywords: [
    "hotel en Termas",
    "Grand Hotel City",
    "hotel 3 estrellas",
    "habitaciones de lujo",
    "reserva de hotel",
    "hotel céntrico Termas",
    "spa y restaurante hotel",
  ],
  openGraph: {
    type: "website",
    url: "https://www.grandhotelcity.com",
    title: "Grand Hotel City | Hotel 3 Estrellas en Termas",
    description:
      "Descubre el Grand Hotel City en Termas. Habitaciones elegantes, spa, restaurante gourmet y la mejor ubicación para tu estadía.",
    images: [
      {
        url: "/portada.webp",
        width: 1200,
        height: 630,
        alt: "Grand Hotel City - Fachada y entrada principal",
      },
    ],
    siteName: "Grand Hotel City",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grand Hotel City | Hotel 3 Estrellas en Termas",
    description:
      "Elegancia, confort y ubicación privilegiada en Termas. Reservá ahora tu estadía en el Grand Hotel City.",
    images: ["/portada.webp"],
  },
  alternates: {
    canonical: "https://www.grandhotelcity.com",
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
