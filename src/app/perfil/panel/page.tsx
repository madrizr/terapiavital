"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { EyeIcon, TrashIcon, SearchIcon, CheckIcon, XIcon } from "lucide-react";
// ✅ TIPOS ESPECÍFICOS DE FIRESTORE
import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  QuerySnapshot, // Importado para tipado
  DocumentData, // Importado para tipado
} from "firebase/firestore";
import { db } from "@/lib/firebase";

// ✅ 1. INTERFAZ AJUSTADA: id es string
interface Client {
  id: string;
  name: string;
  city: string;
  email: string;
  phone: string;
  scheduled: number;
  completed: number;
}

export default function Panel() {
  const router = useRouter();
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValues, setEditValues] = useState({
    scheduled: 0,
    completed: 0,
  });

  // ======================================================================
  // 1. ESTADO PARA LA PAGINACIÓN
  // ======================================================================
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 5;
  // ======================================================================

  useEffect(() => {
    const clientsCollectionRef = collection(db, "clientes");

    const unsubscribe = onSnapshot(
      clientsCollectionRef,
      (snapshot: QuerySnapshot<DocumentData>) => {
        const clientsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Client[];
        setClients(clientsData);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // Resetear a la página 1 cuando se busca
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ======================================================================
  // 2. LÓGICA PARA CALCULAR LOS ELEMENTOS DE LA PÁGINA ACTUAL
  // ======================================================================
  const totalPages = Math.ceil(filteredClients.length / ITEMS_PER_PAGE);
  const indexOfLastClient = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstClient = indexOfLastClient - ITEMS_PER_PAGE;
  const currentClients = filteredClients.slice(
    indexOfFirstClient,
    indexOfLastClient
  );
  // ======================================================================

  const handleDelete = async (id: string) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este cliente?")) {
      const clientDocRef = doc(db, "clientes", id);

      try {
        await deleteDoc(clientDocRef);
      } catch (error) {
        console.error("Error deleting document: ", error);
      }
    }
  };

  const handleView = (id: string) => {
    router.push(`/perfil/panel/${id}`);
  };

  const startEditing = (client: Client) => {
    setEditingId(client.id);
    setEditValues({
      scheduled: client.scheduled,
      completed: client.completed,
    });
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditValues({
      ...editValues,
      [name]: parseInt(value, 10) || 0,
    });
  };

  const saveEdit = async () => {
    if (editingId) {
      const clientDocRef = doc(db, "clientes", editingId);
      try {
        await updateDoc(clientDocRef, {
          scheduled: editValues.scheduled,
          completed: editValues.completed,
        });
        setEditingId(null);
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  if (loading) {
    return <div className="p-4 text-center">Cargando clientes...</div>;
  }

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">
          Panel de Gestión de Clientes
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Visualiza y gestiona toda la información de los clientes
        </p>
      </div>
      <div className="p-4">
        {/* Buscador */}
        <div className="mb-4 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Buscar clientes..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Tabla */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {[
                  "Nombre",
                  "Ciudad",
                  "Email",
                  "Teléfono",
                  "Agendadas",
                  "Completadas",
                  "Acciones",
                ].map((col) => (
                  <th
                    key={col}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* SE USA 'currentClients' EN LUGAR DE 'filteredClients' */}
              {currentClients.map((client) => (
                <tr
                  key={client.id}
                  className={`hover:bg-gray-50 ${
                    editingId === client.id ? "bg-blue-50" : ""
                  }`}
                >
                  <td
                    className="px-6 py-4 whitespace-nowrap cursor-pointer"
                    onClick={() =>
                      editingId !== client.id && handleView(client.id)
                    }
                  >
                    {client.name}
                  </td>
                  <td
                    className="px-6 py-4 whitespace-nowrap cursor-pointer"
                    onClick={() =>
                      editingId !== client.id && handleView(client.id)
                    }
                  >
                    {client.city}
                  </td>

                  <td
                    className="px-6 py-4 whitespace-nowrap cursor-pointer"
                    onClick={() =>
                      editingId !== client.id && handleView(client.id)
                    }
                  >
                    {client.email}
                  </td>
                  <td
                    className="px-6 py-4 whitespace-nowrap cursor-pointer"
                    onClick={() =>
                      editingId !== client.id && handleView(client.id)
                    }
                  >
                    {client.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingId === client.id ? (
                      <input
                        type="number"
                        name="scheduled"
                        value={editValues.scheduled}
                        onChange={handleEditChange}
                        className="w-16 p-1 border border-gray-300 rounded"
                        min="0"
                      />
                    ) : (
                      <div
                        className="cursor-pointer hover:bg-gray-100 p-1 rounded"
                        onClick={() => startEditing(client)}
                      >
                        {client.scheduled}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingId === client.id ? (
                      <input
                        type="number"
                        name="completed"
                        value={editValues.completed}
                        onChange={handleEditChange}
                        className="w-16 p-1 border border-gray-300 rounded"
                        min="0"
                      />
                    ) : (
                      <div
                        className="cursor-pointer hover:bg-gray-100 p-1 rounded"
                        onClick={() => startEditing(client)}
                      >
                        {client.completed}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <div className="flex justify-center space-x-2">
                      {editingId === client.id ? (
                        <>
                          <button
                            onClick={saveEdit}
                            className="text-green-600 hover:text-green-900"
                            title="Guardar"
                          >
                            <CheckIcon className="h-5 w-5" />
                          </button>
                          <button
                            onClick={cancelEdit}
                            className="text-red-600 hover:text-red-900"
                            title="Cancelar"
                          >
                            <XIcon className="h-5 w-5" />
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleView(client.id)}
                            className="text-teal-600 hover:text-teal-700 cursor-pointer"
                            title="Ver detalles"
                          >
                            <EyeIcon className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(client.id)}
                            className="text-red-600 hover:text-red-900 cursor-pointer"
                            title="Eliminar"
                          >
                            <TrashIcon className="h-5 w-5" />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
              {filteredClients.length === 0 && !loading && (
                <tr>
                  <td
                    colSpan={8}
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    No se encontraron clientes.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* ====================================================================== */}
        {/* 3. CONTROLES DEL PAGINADOR */}
        {/* ====================================================================== */}
        {totalPages > 1 && (
          <div className="mt-4 flex justify-center items-center space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 text-sm font-medium text-gray-700 bg-white rounded-md border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Anterior
            </button>
            <span className="text-sm text-gray-600">
              Página {currentPage} de {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 text-sm font-medium text-gray-700 bg-white rounded-md border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Siguiente
            </button>
          </div>
        )}
        {/* ====================================================================== */}
      </div>
    </div>
  );
}
