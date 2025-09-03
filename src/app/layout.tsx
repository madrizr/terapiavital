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
  title: "Acupuntura Vital",
  description:
    "Jose Madriz, especialista en el área de la acupuntura con mas de 15 años de experiencia en la utilización de este método de sanación. Comenzó sus estudios en la ‘Fundación de escuelas Nei Jing‘, instituto internacional. En la sede de Caracas Venezuela recibió clases por tres años de fisiopatología y tratamiento en medicina tradicional china además de horas de práctica y cursos de apoyo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
