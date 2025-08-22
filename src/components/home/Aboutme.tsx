"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
// Un ícono de flecha para el botón, ahora con tipos para TSX.

export const AboutMe = () => {
  return (
    <section className="bg-white font-sans">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Columna de Información */}
          <div className=" md:text-left">
            <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-800 mb-4">
              Conoceme
            </h2>
            <div
              className="h-1.5 w-32 flex mx-auto  mt-4 mb-6 "
              style={{ background: "#BA9F33" }}
            ></div>
            <div className="flex justify-center  w-full sm:flex md:flex lg:hidden">
              <img
                src="https://acupunturavital.netlify.app/assets/acupuntura.png"
                alt="Jose Madriz"
                className="rounded-full w-72 max-w-md object-cover"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src =
                    "https://placehold.co/600x400/cccccc/ffffff?text=Error+al+cargar";
                }}
              />
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Jose Madriz, especialista en el área de la acupuntura con mas de
              15 años de experiencia en la utilización de este método de
              sanación. Comenzó sus estudios en la 'Fundación de escuelas Nei
              Jing', instituto internacional. En la sede de Caracas Venezuela
              recibió clases por tres años de fisiopatología y tratamiento en
              medicina tradicional china además de horas de práctica y cursos de
              apoyo. Con la finalidad de desarrollar aún mas sus conocimientos,
              por tres años cursó estudios en la academia Herencia
              Luminosa-CEMETC (Centro de estudios de medicina tradicional china)
              vinculado con la Universidad Santiago de Compostela, España.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Formaciones profesionales complementarias: terapia auricular,
              quiropraxia, microsistemas, osteopatía bioenergética, puntos
              curiosos, acupuntura craneal, acupuntura veterinaria, flores de
              bach y otros.
            </p>
            <div className="flex justify-center lg:justify-start w-full">
              <a
                href="#"
                className="inline-flex items-center bg-teal-500 text-white font-semibold py-3 px-10 rounded-lg hover:bg-teal-600 shadow-lg"
              >
                Ver más
              </a>
            </div>
          </div>

          {/* Columna de la Imagen */}
          <div className="justify-center w-full sm:hidden hidden md:hidden lg:flex">
            <img
              src="https://acupunturavital.netlify.app/assets/acupuntura.png"
              alt="Jose Madriz"
              className="rounded-full w-96 max-w-md object-cover"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src =
                  "https://placehold.co/600x400/cccccc/ffffff?text=Error+al+cargar";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
