"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardTerapia from "../shared/CardTerapia";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function Terapias() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on desktop (min-width: 1024px corresponds to Tailwind's lg breakpoint)
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(".terapia-card-anim", containerRef.current);
      
      cards.forEach((card, i) => {
        const isLeftToRight = i % 2 === 0;
        
        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: isLeftToRight ? -150 : 150,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%", // Starts animation when the top of the card is at 85% of the viewport height
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={containerRef} className="overflow-x-clip">
      <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-800 mb-4">
        Terapias
      </h2>
      <div
        className="h-1.5 w-32 flex mx-auto  mt-4 mb-6 "
        style={{ background: "#BA9F33" }}
      ></div>
      <section className="fondo-terapias">
        <section className="p-5">
          <section className="terapia-card-anim grid grid-cols-1 lg:grid-cols-2 mb-8">
            <div className={false ? "col-start-2" : ""}>
              <CardTerapia
                img="images/icons-terapia/acupuntura.svg"
                title="Acupuntura"
                description="Técnica milenaria que consiste en insertar agujas en canales energéticos a fin de restablecer la salud."
              />
            </div>
          </section>
          <section className="terapia-card-anim grid grid-cols-1 lg:grid-cols-2 mb-8">
            <div className={true ? "col-start-2" : ""}>
              <CardTerapia
                img="images/icons-terapia/espalda.svg"
                title="Quiropraxia"
                description="Consiste en la manipulación de las articulaciones y tejidos blandos, a fin de corregir las vértebras, contracturas las cuales en muchas ocasiones producen dolor de cabeza, estrés entre otras molestias."
              />
            </div>
          </section>
          <section className="terapia-card-anim grid grid-cols-1 lg:grid-cols-2 mb-8">
            <div className={false ? "col-start-2" : ""}>
              <CardTerapia
                img="images/icons-terapia/belleza.svg"
                title="Acupuntura Cosmética"
                description="Aplicación de pequeñas agujas filiformes en el rostro a fin de
          armonizar la energía no circulante ayudando a suavizar las líneas de
          expresión y la eliminación de círculos, párpados inflamados, entre
          otras afecciones."
              />
            </div>
          </section>
          <section className="terapia-card-anim grid grid-cols-1 lg:grid-cols-2 mb-8">
            <div className={true ? "col-start-2" : ""}>
              <CardTerapia
                img="images/icons-terapia/moxa.svg"
                title="Moxisbustión"
                description="Tratamiento ancestral que consiste en aplicar calor con un tabaco o puro de moxa (artemisa vulgaris) a fin de movilizar la sangre y permitir el flujo del Qi (energía)."
              />
            </div>
          </section>
          <section className="terapia-card-anim grid grid-cols-1 lg:grid-cols-2 mb-8">
            <div className={false ? "col-start-2" : ""}>
              <CardTerapia
                img="images/icons-terapia/oreja.svg"
                title="
Auriculoterapia"
                description="Técnica exitosa que consiste en colocar agujas pequeñas y/o balines de metal en el pabellón de la oreja con ello logramos efectos en el tratamiento de migrañas, obesidad, etc."
              />
            </div>
          </section>
          <section className="terapia-card-anim grid grid-cols-1 lg:grid-cols-2 mb-8">
            <div className={true ? "col-start-2" : ""}>
              <CardTerapia
                img="images/icons-terapia/track.svg"
                title="Acupuntura veterinaria
"
                description="Es un antiguo método de sanación que ayuda a los animales a superar enfermedades, el principio de su aplicación es el mismo que en humanos y el indice de efectividad es cuatro veces mayor."
              />
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}

export default Terapias;
