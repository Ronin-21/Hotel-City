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
  src: "../public/Restora.otf",
  variable: "--font-title",
  display: "swap",
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
    site: "@TuUsuarioTwitter", // si tienes cuenta
    creator: "@TuUsuarioTwitter",
  },
  openGraph: {
    title: "Hotel City - Refugio de lujo en la ciudad",
    description:
      "Disfruta de habitaciones elegantes, servicios excepcionales y una ubicación inmejorable. Reserva ahora y vive una experiencia inolvidable.",
    url: "https://tusitio.com",
    siteName: "Hotel City",
    images: [
      {
        url: "https://tusitio.com/og-image.jpg", // imagen para redes (ideal 1200x630 px)
        width: 1200,
        height: 630,
        alt: "Hotel City",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
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
