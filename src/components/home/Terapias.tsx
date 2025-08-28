import CardTerapia from "../shared/CardTerapia";

function Terapias() {
  return (
    <>
      <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-800 mb-4">
        Terapias
      </h2>
      <div
        className="h-1.5 w-32 flex mx-auto  mt-4 mb-6 "
        style={{ background: "#BA9F33" }}
      ></div>
      <section className="fondo-terapias">
        <section className="p-5">
          <section className="grid grid-cols-1 lg:grid-cols-2 mb-8">
            <div className={false ? "col-start-2" : ""}>
              <CardTerapia
                img="images/icons-terapia/acupuntura.svg"
                title="Acupuntura"
                description="Técnica milenaria que consiste en insertar agujas en canales energéticos a fin de restablecer la salud."
              />
            </div>
          </section>
          <section className="grid grid-cols-1 lg:grid-cols-2 mb-8">
            <div className={true ? "col-start-2" : ""}>
              <CardTerapia
                img="images/icons-terapia/espalda.svg"
                title="Quiropraxia"
                description="Consiste en la manipulación de las articulaciones y tejidos blandos, a fin de corregir las vértebras, contracturas las cuales en muchas ocasiones producen dolor de cabeza, estrés entre otras molestias."
              />
            </div>
          </section>
          <section className="grid grid-cols-1 lg:grid-cols-2 mb-8">
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
          <section className="grid grid-cols-1 lg:grid-cols-2 mb-8">
            <div className={true ? "col-start-2" : ""}>
              <CardTerapia
                img="images/icons-terapia/moxa.svg"
                title="Moxisbustión"
                description="Tratamiento ancestral que consiste en aplicar calor con un tabaco o puro de moxa (artemisa vulgaris) a fin de movilizar la sangre y permitir el flujo del Qi (energía)."
              />
            </div>
          </section>
          <section className="grid grid-cols-1 lg:grid-cols-2 mb-8">
            <div className={false ? "col-start-2" : ""}>
              <CardTerapia
                img="images/icons-terapia/oreja.svg"
                title="
Auriculoterapia"
                description="Técnica exitosa que consiste en colocar agujas pequeñas y/o balines de metal en el pabellón de la oreja con ello logramos efectos en el tratamiento de migrañas, obesidad, etc."
              />
            </div>
          </section>
          <section className="grid grid-cols-1 lg:grid-cols-2 mb-8">
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
    </>
  );
}

export default Terapias;
