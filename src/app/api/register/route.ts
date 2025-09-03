import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { addDoc } from "firebase/firestore";
import { clientsCollectionRef, db } from "@/lib/firebase";

// export const runtime = "edge";
export const runtime = "nodejs";

interface formData {
  nombre: string;
  email: string;
  telefono: string;
  ciudad: string;
  motivo: string;
}

export const POST = async (request: Request) => {
  try {
    const formData = await request.json();
    const city = formData.city as string;
    const email = formData.email as string;
    const name = formData.name as string;
    const phone = formData.phone as string;
    const reason = formData.reason as string;
    const scheduled = 0;
    const completed = 0;
    const formSend = {
      city: city,
      email: email,
      name: name,
      phone: phone,
      reason: reason,
      scheduled,
      completed,
      notes: [],
    };
    console.log(formSend);
    console.log(formData);

    // 3. Guardar la información en la base de datos de Supabase
    if (!formData) throw "Formulario Invalido";
    const docRef = await addDoc(clientsCollectionRef, formSend);

    console.log("Documento añadido con ID: ", docRef.id);

    // 4. Enviar notificación por Email usando Nodemailer con Gmail
    // try {
    //   // Obtenemos las nuevas variables de entorno para Gmail
    //   const gmailUser = process.env.GMAIL_USER;
    //   const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    //   const adminEmail = process.env.ADMIN_EMAIL;

    //   // Se comprueba que TODAS las variables necesarias existen.
    //   if (gmailUser && gmailAppPassword && adminEmail) {
    //     // El contenido del email no cambia, es el mismo que ya tenías
    //     const htmlContent = `
    //   <h1>🚨 Nuevo Registro de Mayorista - IKAMBIO</h1>
    //   <p>Se ha registrado una nueva empresa en la plataforma.</p>
    //   <h2>Detalles del Registro:</h2>
    //   <ul>
    //     <li><strong>Empresa:</strong> ${companyName}</li>
    //     <li><strong>RIF:</strong> ${rif}</li>
    //     <li><strong>Industria:</strong> ${industry}</li>
    //     <li><strong>Ubicación:</strong> ${location}</li>
    //     <li><strong>Contacto:</strong> ${contactNumber}</li>
    //     <li><strong>Lista de Precios:</strong> <a href="${sheetsLink}">Ver Lista</a></li>
    //     <li><strong>Comprobante RIF:</strong> <a href="${rifPublicUrl}">Ver Comprobante</a></li>
    //   </ul>
    // `;

    //     // 1. Configura el "transporte" de Nodemailer para usar Gmail
    //     const transporter = nodemailer.createTransport({
    //       service: "gmail",
    //       auth: {
    //         user: gmailUser,
    //         pass: gmailAppPassword,
    //       },
    //     });

    //     // 2. Prepara y envía el email
    //     await transporter.sendMail({
    //       from: `"Notificaciones de Registro - IKAMBIO" <${gmailUser}>`, // Remitente
    //       to: adminEmail, // Destinatario
    //       subject: `Nuevo Registro de Mayorista: ${companyName}`, // Asunto
    //       html: htmlContent, // Cuerpo del email en HTML
    //     });

    //     console.log(
    //       "Email de notificación enviado con éxito a través de Nodemailer."
    //     );
    //   } else {
    //     // Si faltan variables, se notifica en la consola del servidor.
    //     console.error(
    //       "Faltan variables de entorno para Nodemailer/Gmail. No se envió el email de notificación."
    //     );
    //   }
    // } catch (notificationError) {
    //   console.error(
    //     "Falló el bloque de notificación por email de Nodemailer:",
    //     notificationError
    //   );
    // }
    return NextResponse.json({
      success: true,
      message: "Registro completado con éxito.",
    });
  } catch (error) {
    console.error(error);
    const errorMessage =
      error instanceof Error ? error.message : "Un error inesperado ocurrió.";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
};
