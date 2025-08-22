"use client";
import FormConsulta from "../forms/FormConsulta";
import "./styles/header.css";
function HeaderComponent() {
  return (
    <>
      <section className="fondo flex lg:flex-col justify-center lg:pl-10 p-4 mt-20">
        <FormConsulta />
      </section>
    </>
  );
}

export default HeaderComponent;
