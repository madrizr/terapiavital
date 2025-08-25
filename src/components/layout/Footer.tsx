import "./styles/Footer.css";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="lg:w-2xl p-5">
          <p className="text-center">
            Todos los datos almacenados en este sitio web, son de total
            confidencialidad entre el cliente y el especialista, solo seran
            evaluados por este y en caso de que se requiera, por un equipo
            certificado de especialistas médicos.
          </p>
          <p className="text-center my-3">Caracas - Dtto. Capital Venezuela</p>
        </div>

        <div className="lg:flex lg:justify-between w-full">
          <p className="text-center text-md">
            ®2026 Acupuntura Activa all rights reserved
          </p>
          <p className="text-center mt-2 text-md">
            {" "}
            Designed by{" "}
            <a href="https://robertomadriz.net">Roberto Madriz Web Developer</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
