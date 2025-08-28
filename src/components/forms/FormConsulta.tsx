"use client";

import { useState } from "react";
import "./styles/forms.css";
import BtnPrimary from "../shared/buttons/btnPrimary";
import InputText from "../shared/inputs/input-text";
import TextArea from "../shared/inputs/text-area";
export default function FormConsulta() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    ciudad: "",
    motivo: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    alert("Formulario enviado ✅");
  };

  return (
    <form onSubmit={handleSubmit} className="form-consulta">
      <h2 className="title text-center mb-4">Pida su cita</h2>

      {/* Nombre */}
      <div className="grid lg:gap-5 lg:grid-cols-2">
        <div>
          <InputText
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre"
            required
          />
        </div>
        <div>
          <InputText
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Correo electronico"
            required
          />
        </div>
      </div>

      {/* Teléfono */}
      <div className="grid lg:gap-5 lg:grid-cols-2">
        <div>
          <InputText
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="Telefono (+58 412)"
            required
          />
        </div>

        {/* Ciudad */}
        <div>
          <InputText
            type="text"
            name="ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            placeholder="Ciudad"
            required
          ></InputText>
        </div>
      </div>

      {/* Motivo */}
      <div>
        <TextArea
          name="motivo"
          value={formData.motivo}
          onChange={handleChange}
          placeholder="Haga una breve exposición del motivo de su consulta..."
          rows={4}
          required
        />
      </div>

      {/* Botón */}
      <BtnPrimary disabled={false}> Enviar </BtnPrimary>
    </form>
  );
}
