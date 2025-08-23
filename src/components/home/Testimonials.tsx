import { TestimonialCard } from "../shared/TestimonialCard";

function Testimonials() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <TestimonialCard
            img="https://acupunturavital.netlify.app/assets/testimonio.png"
            title="Gerson Suarez"
            subtitle="Paciente habitual"
            descripton="Mi nombre es Gerson Suárez, llegué al consultorio con un fuerte dolor lumbar a nivel de la L5 y fui tratado por Jose Madriz quien me aplicó terapia de acupuntura y moxibustión con óptimos resultados al punto que no he presentado a la fecha dolor alguno."
          />
          <TestimonialCard
            img="https://acupunturavital.netlify.app/assets/testimoniotwo.png"
            title="Idolfredo Liendo"
            subtitle="Paciente habitual"
            descripton="Fui tratado por el terapeuta Jose Madriz quien aplicó un tratamiento de acupuntura para la ansiedad, la cual me provocaba insomnio según me explicó en su consultorio, además presentaba acufenos en mi oido izquierdo doy veraz testimonio al decir que los niveles de ansiedad disminuyeron y ahora puedo dormir plácidamente además el zumbido en el oido es menos intenso. Algo que he notado es que siento mayor fortaleza física y sexual. Continuo en tratamiento."
          />
          <TestimonialCard
            img="https://acupunturavital.netlify.app/assets/julian.jpg"
            title="Antonio Rodriguez"
            subtitle="Paciente habitual"
            descripton="Asistí a la consulta de Madriz presentando Síndrome Miofascial en la pierna izquierda a nivel del músculo vasto, con pocas terapias ( tendino musculares) me ha disminuido el dolor y ha bajado la inflamación en el tejido muscular. Recientemente entré por sugerencia del especialista en acupuntura a la fase de fisiatria y los resultados se notan al caminar y la intensidad del dolor bajo en las noches, realmente estoy complacido."
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
