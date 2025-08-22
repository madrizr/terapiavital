import "./styles/cardTerapia.css";

function CardTerapia({ title = "", img = "", description = "" }) {
  return (
    <section className="container-2 grid grid-cols-5 gap-3">
      <div
        className="
       col-span-2"
      >
        <div className=" flex justify-center content-center h-full">
          <img
            src={img}
            alt="hola"
            width={"100%"}
            height={"100%"}
            className="imagen-terapia"
          />
        </div>
      </div>
      <div className="flex flex-col col-span-3">
        <h3 className="font-medium text-xl">{title}</h3>
        <hr className="mx-1 my-3" style={{ color: "#BA9F33" }} />
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      </div>
    </section>
  );
}

export default CardTerapia;
