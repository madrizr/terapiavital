import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Acupuntura Vital - Atención a domicilio en la Isla de Margarita",
  keywords: [
    "acupuntura a domicilio",
    "consultorio acupuntura",
    "acupuntura online",
    "acupuntura margarita",
    "jose madriz",
    "medicina china",
    "quiropraxia margarita",
    "ansiedad estres",
    "alivio del dolor",
  ],
  openGraph: {
    title: "Acupuntura en la Isla de Margarita - Acupuntura Vital",
    description:
      "Alivio y bienestar con sesiones de acupuntura profesional en la comodidad de tu hogar.",
    // URL de una imagen representativa de tu servicio
    images: "/images/servicios/consultorio.jpg", // Coloca una imagen en tu carpeta /public
  },
  description:
    "Especialista en acupuntura con 15+ años de experiencia. Ofrecemos tratamientos personalizados a domicilio en la Isla de Margarita. Alivio del dolor y bienestar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
