"use client";
/* eslint-disable react/no-unescaped-entities */

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { EyeIcon, TrashIcon, SearchIcon, CheckIcon, XIcon } from "lucide-react";

// Definimos el tipo de cliente
interface Client {
  id: number;
  name: string;
  city: string;
  reasonForConsultation: string;
  email: string;
  phoneNumber: string;
  scheduledAppointments: number;
  completedAppointments: number;
}

// Mock de clientes (puedes reemplazarlo con datos de una API más adelante)
const initialClients: Client[] = [
  {
    id: 1,
    name: "John Doe",
    city: "New York",
    reasonForConsultation: "Check-up",
    email: "john@example.com",
    phoneNumber: "123-456-7890",
    scheduledAppointments: 2,
    completedAppointments: 1,
  },
  {
    id: 2,
    name: "Jane Smith",
    city: "Los Angeles",
    reasonForConsultation: "Therapy",
    email: "jane@example.com",
    phoneNumber: "987-654-3210",
    scheduledAppointments: 3,
    completedAppointments: 2,
  },
];

export default function Panel() {
  const router = useRouter();
  const [clients, setClients] = useState<Client[]>(initialClients);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editValues, setEditValues] = useState({
    scheduledAppointments: 0,
    completedAppointments: 0,
  });

  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this client?")) {
      setClients(clients.filter((client) => client.id !== id));
    }
  };

  const handleView = (id: number) => {
    router.push(`/perfil/panel/${id}`); // ✅ usamos router de Next.js
  };

  const startEditing = (client: Client) => {
    setEditingId(client.id);
    setEditValues({
      scheduledAppointments: client.scheduledAppointments,
      completedAppointments: client.completedAppointments,
    });
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditValues({
      ...editValues,
      [name]: parseInt(value) || 0,
    });
  };

  const saveEdit = () => {
    if (editingId) {
      setClients(
        clients.map((client) =>
          client.id === editingId
            ? {
                ...client,
                ...editValues,
              }
            : client
        )
      );
      setEditingId(null);
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">
          Client Management Panel
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          View and manage all client information
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
            placeholder="Search clients..."
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
                  "Name",
                  "City",
                  "Reason",
                  "Email",
                  "Phone",
                  "Scheduled",
                  "Completed",
                  "Actions",
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
              {filteredClients.map((client) => (
                <tr
                  key={client.id}
                  className={`hover:bg-gray-50 ${
                    editingId === client.id ? "bg-blue-50" : ""
                  }`}
                >
                  {/* Name */}
                  <td
                    className="px-6 py-4 whitespace-nowrap cursor-pointer"
                    onClick={() =>
                      editingId !== client.id && handleView(client.id)
                    }
                  >
                    {client.name}
                  </td>
                  {/* City */}
                  <td
                    className="px-6 py-4 whitespace-nowrap cursor-pointer"
                    onClick={() =>
                      editingId !== client.id && handleView(client.id)
                    }
                  >
                    {client.city}
                  </td>
                  {/* Reason */}
                  <td
                    className="px-6 py-4 whitespace-nowrap cursor-pointer"
                    onClick={() =>
                      editingId !== client.id && handleView(client.id)
                    }
                  >
                    {client.reasonForConsultation}
                  </td>
                  {/* Email */}
                  <td
                    className="px-6 py-4 whitespace-nowrap cursor-pointer"
                    onClick={() =>
                      editingId !== client.id && handleView(client.id)
                    }
                  >
                    {client.email}
                  </td>
                  {/* Phone */}
                  <td
                    className="px-6 py-4 whitespace-nowrap cursor-pointer"
                    onClick={() =>
                      editingId !== client.id && handleView(client.id)
                    }
                  >
                    {client.phoneNumber}
                  </td>
                  {/* Scheduled */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingId === client.id ? (
                      <input
                        type="number"
                        name="scheduledAppointments"
                        value={editValues.scheduledAppointments}
                        onChange={handleEditChange}
                        className="w-16 p-1 border border-gray-300 rounded"
                        min="0"
                      />
                    ) : (
                      <div
                        className="cursor-pointer hover:bg-gray-100 p-1 rounded"
                        onClick={() => startEditing(client)}
                      >
                        {client.scheduledAppointments}
                      </div>
                    )}
                  </td>
                  {/* Completed */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingId === client.id ? (
                      <input
                        type="number"
                        name="completedAppointments"
                        value={editValues.completedAppointments}
                        onChange={handleEditChange}
                        className="w-16 p-1 border border-gray-300 rounded"
                        min="0"
                      />
                    ) : (
                      <div
                        className="cursor-pointer hover:bg-gray-100 p-1 rounded"
                        onClick={() => startEditing(client)}
                      >
                        {client.completedAppointments}
                      </div>
                    )}
                  </td>
                  {/* Actions */}
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <div className="flex justify-center space-x-2">
                      {editingId === client.id ? (
                        <>
                          <button
                            onClick={saveEdit}
                            className="text-green-600 hover:text-green-900"
                            title="Save"
                          >
                            <CheckIcon className="h-5 w-5" />
                          </button>
                          <button
                            onClick={cancelEdit}
                            className="text-red-600 hover:text-red-900"
                            title="Cancel"
                          >
                            <XIcon className="h-5 w-5" />
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleView(client.id)}
                            className="text-teal-600 hover:text-teal-700 cursor-pointer"
                            title="View details"
                          >
                            <EyeIcon className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(client.id)}
                            className="text-red-600 hover:text-red-900 cursor-pointer"
                            title="Delete"
                          >
                            <TrashIcon className="h-5 w-5" />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
              {filteredClients.length === 0 && (
                <tr>
                  <td
                    colSpan={8}
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    No clients found matching your search criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
