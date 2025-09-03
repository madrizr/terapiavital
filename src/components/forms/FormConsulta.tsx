"use client";

import { useEffect, useState } from "react";
import "./styles/forms.css";
import BtnPrimary from "../shared/buttons/btnPrimary";
import InputText from "../shared/inputs/input-text";
import TextArea from "../shared/inputs/text-area";
import { enqueueSnackbar, SnackbarProvider } from "notistack";

export default function FormConsulta() {
  const formBase = {
    name: "",
    email: "",
    phone: "",
    city: "",
    reason: "",
  };
  const [formData, setFormData] = useState(formBase);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isPhoneValid = formData.phone.length > 4;
    const otherFieldsFilled =
      formData.name && formData.email && formData.city && formData.reason;

    setIsFormValid(isPhoneValid && !!otherFieldsFilled);
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (!value.startsWith("+58 ")) {
      value = "+58 ";
    }
    setFormData({ ...formData, phone: value });
  };

  const handlePhoneFocus = () => {
    if (formData.phone === "") {
      setFormData({ ...formData, phone: "+58 " });
    }
  };

  const handlePhoneBlur = () => {
    if (formData.phone.trim() === "+58") {
      setFormData({ ...formData, phone: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se activa el spinner
    setIsSubmitting(true);
    try {
      if (!formData) throw "Formulario Invalido";

      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      enqueueSnackbar(
        "Cita solicitada exitosamente, le contactaremos proximamente.",
        { variant: "success" }
      );
    } catch (error) {
      console.error("Error al añadir el documento: ", error);
      enqueueSnackbar("Hubo un error al enviar el formulario.", {
        variant: "error",
      });
    } finally {
      // Aquí se desactiva el spinner
      setIsSubmitting(false);
      setFormData(formBase);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-consulta">
      <h2 className="title text-center mb-4">Pida su cita</h2>

      {/* ... otros inputs ... */}
      <div className="grid lg:gap-5 lg:grid-cols-2">
        <div>
          <InputText
            type="text"
            name="name"
            value={formData.name}
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

      <div className="grid lg:gap-5 lg:grid-cols-2">
        <div>
          <InputText
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handlePhoneChange}
            onFocus={handlePhoneFocus}
            onBlur={handlePhoneBlur}
            placeholder="Teléfono"
            required
          />
        </div>
        <div>
          <InputText
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Ciudad"
            required
          ></InputText>
        </div>
      </div>

      <div>
        <TextArea
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          placeholder="Haga una breve exposición del motivo de su consulta..."
          rows={4}
          required
        />
      </div>

      <BtnPrimary disabled={!isFormValid} isLoading={isSubmitting}>
        Enviar
      </BtnPrimary>
      <SnackbarProvider
        variant="success"
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        autoHideDuration={5000}
      ></SnackbarProvider>
    </form>
  );
}
