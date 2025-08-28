import Link from "next/link";
import "./styles/grid-services.css";
import "./styles/services.css";
function Servicios() {
  return (
    <section>
      <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-800 mb-4">
        Servicios
      </h2>
      <div
        className="h-1.5 w-32 flex mx-auto  mt-4 mb-6"
        style={{ background: "#BA9F33" }}
      ></div>
      <div className="parent p-5">
        <section className="div1-alternate">
          <div className="grid grid-cols-1 grid-rows-2 w-full">
            <div className="col-span-2 h-full w-full ">
              <div className="w-full h-full">
                <img
                  src="https://cdn.pixabay.com/photo/2017/03/28/12/13/chairs-2181968_1280.jpg"
                  alt="per"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
            </div>
            <div className="flex flex-col col-span-3 p-3">
              <h3 className="font-medium text-xl">Domicilio</h3>
              <hr className="mx-1 my-3" style={{ color: "#BA9F33" }} />
              <p className="text-gray-600 mb-6 leading-relaxed">
                Prestamos atención en la comodidad de su residencia, trasladamos
                a su hogar todo el instrumental para un óptimo tratamiento
                incluso camilla portatil.
              </p>
            </div>
          </div>
        </section>
        <section className="div1">
          <div className="image-card-grid">
            <img
              src="https://cdn.pixabay.com/photo/2017/03/28/12/13/chairs-2181968_1280.jpg"
              alt=""
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="p-3">
            <h3 className="font-medium text-xl">Domicilio</h3>
            <hr className="mx-1 my-3" style={{ color: "#BA9F33" }} />
            <p className="text-gray-600 mb-6 leading-relaxed">
              Prestamos atención en la comodidad de su residencia, trasladamos a
              su hogar todo el intrumental para un óptimo tratamiento incluso
              camilla portatil.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Horarios comprendios:{" "}
              <strong>Lunes a Sabado, previa cita.</strong>
            </p>
          </div>
        </section>
        <section className="div2">
          <div className="grid lg:grid-cols-5 lg:gap-4 h-full grid-cols-1 grid-rows-2 w-full ">
            <div className="lg:col-span-2 h-full w-full bg-black">
              <div className="w-full h-full ">
                <img
                  src="images/servicios/consultorio.jpg"
                  alt="per"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
            </div>
            <div className="flex flex-col lg:col-span-3 p-3">
              <h3 className="font-medium text-xl">Consultorio</h3>
              <hr className="mx-1 my-3" style={{ color: "#BA9F33" }} />
              <p className="text-gray-600 mb-6 leading-relaxed">
                prestamos servicio en la avda Terranova, sector Genovés,
                residencias las Margaritas piso 8 consultorio 86.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Horarios comprendidos:{" "}
                <strong>
                  Lunes a Viernes 9:30am a 3:00pm. Sabados 9:30am a 2:00pm
                </strong>
              </p>
            </div>
          </div>
        </section>
        <section className="div3">
          <div className="grid lg:grid-cols-5 lg:gap-4 h-full grid-cols-1 grid-rows-2 w-full ">
            <div className="lg:col-span-2 h-full w-full ">
              <div className="col-span-2 h-full ">
                <img
                  src="images/servicios/personalizado.webp"
                  alt="per"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
            </div>
            <div className="flex flex-col lg:col-span-3 p-3">
              <h3 className="font-medium text-xl">Personalizado</h3>
              <hr className="mx-1 my-3" style={{ color: "#BA9F33" }} />
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ofrecemos servicio en horario no habitual , fines de semana,
                nocturno y/o dias feriados.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="flex justify-center  p-4 ">
        <div className="md:w-100 w-full">
          <Link href={"#header"}>
            <button
              type="submit"
              className="w-full cursor-pointer bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors"
            >
              PIDA SU CITA AHORA
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Servicios;
