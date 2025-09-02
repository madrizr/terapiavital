"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeftIcon,
  UserIcon,
  CalendarIcon,
  PhoneIcon,
  MailIcon,
  SaveIcon,
  TrashIcon,
} from "lucide-react";
import {
  doc,
  onSnapshot,
  updateDoc,
  Timestamp,
  arrayUnion, // Para añadir elementos a un array
  arrayRemove, // Para eliminar elementos de un array
} from "firebase/firestore";
import { db } from "@/lib/firebase"; // Asegúrate de que esta ruta sea correcta

// Interfaz para la estructura de una nota individual
interface Note {
  id: string; // ID único para facilitar la eliminación
  date: Timestamp;
  note: string;
}

// Interfaz para la estructura completa del cliente
interface Client {
  id: string;
  name: string;
  city: string;
  reason: string;
  email: string;
  phone: string;
  scheduled: number;
  completed: number;
  notes?: Note[]; // El array de notas es opcional y parte del cliente
}

export default function DetailView() {
  const params = useParams();
  const router = useRouter();
  const clientId = params.id as string;

  const [client, setClient] = useState<Client | null>(null);
  const [loading, setLoading] = useState(true);
  const [newNoteText, setNewNoteText] = useState("");

  // Efecto para escuchar cambios en el documento del cliente en tiempo real
  useEffect(() => {
    if (!clientId) return;

    const clientDocRef = doc(db, "clientes", clientId);

    // onSnapshot reacciona a cualquier cambio, incluyendo el array de notas
    const unsubscribe = onSnapshot(clientDocRef, (docSnap) => {
      if (docSnap.exists()) {
        setClient({ id: docSnap.id, ...docSnap.data() } as Client);
      } else {
        console.log("El cliente no fue encontrado.");
        setClient(null);
      }
      setLoading(false);
    });

    // Limpia el listener cuando el componente se desmonta para evitar fugas de memoria
    return () => unsubscribe();
  }, [clientId]);

  // Función para añadir una nueva nota con el límite de 5
  const handleAddNote = async () => {
    if (!newNoteText.trim() || !clientId) return;

    if (client?.notes && client.notes.length >= 5) {
      alert("Solo se pueden guardar hasta 5 notas por paciente.");
      return;
    }

    const newNote: Note = {
      id: new Date().getTime().toString(), // ID único basado en el tiempo
      date: Timestamp.now(),
      note: newNoteText.trim(),
    };

    const clientDocRef = doc(db, "clientes", clientId);
    try {
      await updateDoc(clientDocRef, {
        notes: arrayUnion(newNote),
      });
      setNewNoteText(""); // Limpia el campo de texto
    } catch (error) {
      console.error("Error al añadir la nota: ", error);
    }
  };

  // Función para eliminar una nota existente
  const handleDeleteNote = async (noteToDelete: Note) => {
    if (!clientId) return;
    if (window.confirm("¿Estás seguro de que quieres eliminar esta nota?")) {
      const clientDocRef = doc(db, "clientes", clientId);
      try {
        await updateDoc(clientDocRef, {
          notes: arrayRemove(noteToDelete),
        });
      } catch (error) {
        console.error("Error al eliminar la nota: ", error);
      }
    }
  };

  // Renderiza un estado de carga mientras se obtienen los datos
  if (loading) {
    return (
      <div className="text-center py-12">Cargando datos del paciente...</div>
    );
  }

  // Renderiza un mensaje si el cliente no fue encontrado
  if (!client) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-red-600">
          Cliente No Encontrado
        </h2>
        <p className="mt-2 text-gray-600">
          El cliente que buscas no existe o fue eliminado.
        </p>
        <button
          onClick={() => router.push("/perfil/panel")}
          className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Volver al Panel
        </button>
      </div>
    );
  }

  // Verifica si se ha alcanzado el límite de notas
  const notesLimitReached = (client?.notes?.length ?? 0) >= 5;

  return (
    <div className="bg-white shadow rounded-lg">
      {/* Header con título y botón de volver */}
      <div className="px-4 py-5 sm:px-6 border-b border-gray-200 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Ficha del Paciente
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            {client.name} - {client.city}
          </p>
        </div>
        <button
          onClick={() => router.push("/perfil/panel")}
          className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm rounded-md bg-white hover:bg-gray-50"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-1" />
          Volver
        </button>
      </div>

      {/* Contenido principal */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Columna de Información del Paciente */}
          <div className="md:col-span-1">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <UserIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{client.name}</h3>
                  <p className="text-gray-500 text-sm">{client.city}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <MailIcon className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-gray-600 text-sm">{client.email}</span>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-gray-600 text-sm">{client.phone}</span>
                </div>
                <div className="flex items-start">
                  <CalendarIcon className="h-4 w-4 text-gray-500 mr-2 mt-0.5" />
                  <span className="text-gray-600 text-sm">
                    Motivo: {client.reason}
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Agendadas:</span>
                  <span className="font-semibold">{client.scheduled}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Completadas:</span>
                  <span className="font-semibold">{client.completed}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna de Notas Médicas */}
          <div className="md:col-span-2">
            <div>
              <h3 className="text-lg font-semibold mb-3">Notas Médicas</h3>
              {/* Formulario para añadir nota */}
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Añadir Nueva Nota
                  </h4>
                  <span className="text-sm font-medium text-gray-500">
                    {client?.notes?.length ?? 0} / 5
                  </span>
                </div>
                <textarea
                  value={newNoteText}
                  onChange={(e) => setNewNoteText(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2 mb-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={4}
                  placeholder="Escriba las notas médicas aquí..."
                  disabled={notesLimitReached}
                />
                <div className="flex justify-end">
                  <button
                    onClick={handleAddNote}
                    disabled={notesLimitReached}
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    <SaveIcon className="h-4 w-4 mr-1" />
                    Guardar Nota
                  </button>
                </div>
              </div>

              {/* Lista de notas guardadas */}
              <div className="bg-gray-50 rounded-lg divide-y divide-gray-200">
                {client.notes && client.notes.length > 0 ? (
                  client.notes.map((note) => (
                    <div key={note.id} className="p-4 group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-500">
                          {new Date(note.date.toDate()).toLocaleDateString(
                            "es-VE"
                          )}
                        </span>
                        <button
                          onClick={() => handleDeleteNote(note)}
                          className="text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                          title="Eliminar nota"
                        >
                          <TrashIcon className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-gray-700 whitespace-pre-wrap">
                        {note.note}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="p-4 text-center text-gray-500">
                    Aún no se han añadido notas médicas.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
