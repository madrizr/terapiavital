import TratamientosGallery from "@/components/home/tratamientos/tratamientosGallery";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acupuntura Vital - Nuestros Tratamientos",
  description: `A través del tiempo la acupuntura ha demostrado su valía y gran aporte en el restablecimiento de la salud. Médicos acupuntores como el Dr. José Luis Padilla Corral, Juan José Sánchez, Julio Méndez Bonilla ,
          Carlos Nogueira entre otros han aplicado con éxito este método de
          sanación en enfermedades tales como la impotencia, asma, insomnio,
          parálisis facial entre otras.`,
};

function TratamientosPage() {
  return (
    <section>
      <Navbar />
      <div className="text-center mt-30">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
          Nuestros Tratamientos
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          A través del tiempo la acupuntura ha demostrado su valía y gran aporte
          en el restablecimiento de la salud. Médicos acupuntores como el Dr.
          José Luis Padilla Corral, Juan José Sánchez, Julio Méndez Bonilla ,
          Carlos Nogueira entre otros han aplicado con éxito este método de
          sanación en enfermedades tales como la impotencia, asma, insomnio,
          parálisis facial entre otras.
        </p>
      </div>
      <TratamientosGallery />
      <Footer />
    </section>
  );
}

export default TratamientosPage;
