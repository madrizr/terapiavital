import { Clock, Clock10, Mail, MapPin, Phone } from "lucide-react";

function Contact() {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.917048708723!2d-63.84701072638264!3d10.969633755603134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c318ebe24b0f599%3A0x386f6440c22a170f!2sResidencias%20Las%20Margaritas!5e0!3m2!1ses-419!2sve!4v1756085031706!5m2!1ses-419!2sve"
          width="100%"
          height="100%"
          style={{
            filter: "grayscale(1) contrast(1.2) opacity(0.4)",
          }}
          loading="lazy"
          frameBorder="0"
          title="map"
          scrolling="no"
          data-dashlane-frameid="4168"
        ></iframe>
      </div>
      <div className="container px-3 py-15 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col  w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Contactame
          </h2>
          <div className="py-4">
            <div className="flex">
              <MapPin size={70} />
              <p className="leading-relaxed ml-3 mb-5 text-gray-600">
                Avda Terranova, sector genovés, residencias las Margaritas piso
                8 consultorio 86 Margarita edo. Nva. Esparta.
              </p>
            </div>
            <div className="flex">
              <Clock10 size={50} />
              <p className="leading-relaxed ml-3 mb-5 text-gray-600">
                Atendemos a domicilio. Lunes a Viernes 9:30am a 3:00pm. Sabados
                9:30am a 2:00pm.
              </p>
            </div>
            <div className="flex">
              <Phone />
              <p className="leading-relaxed ml-3 mb-5 text-gray-600">
                +58 (0414) 259 2176
              </p>
            </div>
            <div className="flex">
              <Mail />
              <p className="leading-relaxed ml-3 mb-5 text-gray-600">
                terapiavital12@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
