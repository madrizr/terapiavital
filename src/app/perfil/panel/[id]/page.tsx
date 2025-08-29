"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeftIcon,
  UserIcon,
  MapPinIcon,
  CalendarIcon,
  PhoneIcon,
  MailIcon,
  SaveIcon,
} from "lucide-react";

// Datos de prueba directamente en el archivo
const mockClients = [
  {
    id: 1,
    name: "Juan Pérez",
    city: "Caracas",
    email: "juan@example.com",
    phoneNumber: "+58 424-1234567",
    scheduledAppointments: 5,
    completedAppointments: 3,
    details: {
      address: "Av. Bolívar, Caracas",
      lastVisit: "2025-08-01",
      nextAppointment: "2025-09-10",
    },
  },
  {
    id: 2,
    name: "María González",
    city: "Valencia",
    email: "maria@example.com",
    phoneNumber: "+58 414-7654321",
    scheduledAppointments: 2,
    completedAppointments: 2,
    details: {
      address: "Calle Sucre, Valencia",
      lastVisit: "2025-07-20",
      nextAppointment: "",
    },
  },
];

export default function DetailView() {
  const params = useParams();
  const router = useRouter();
  const clientId = parseInt(params.id as string);
  const client = mockClients.find((c) => c.id === clientId);

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<
    Array<{ text: string; date: string }>
  >([]);

  const handleAddComment = () => {
    if (comment.trim()) {
      const newComment = {
        text: comment,
        date: new Date().toISOString().split("T")[0],
      };
      setComments([newComment, ...comments]);
      setComment("");
    }
  };

  if (!client) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-red-600">
          Client Not Found
        </h2>
        <p className="mt-2 text-gray-600">
          The client youre looking for doesn't exist or has been removed.
        </p>
        <button
          onClick={() => router.push("/perfil/panel")}
          className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to Panel
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg">
      {/* Header */}
      <div className="px-4 py-5 sm:px-6 border-b border-gray-200 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Patient Record
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
          Back
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Patient Info */}
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
                  <span className="text-gray-600 text-sm">
                    {client.phoneNumber}
                  </span>
                </div>
                <div className="flex items-start">
                  <MapPinIcon className="h-4 w-4 text-gray-500 mr-2 mt-0.5" />
                  <span className="text-gray-600 text-sm">
                    {client.details.address}
                  </span>
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-gray-600 text-sm">
                    Last visit: {client.details.lastVisit}
                  </span>
                </div>
                {client.details.nextAppointment && (
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-gray-600 text-sm">
                      Next appointment: {client.details.nextAppointment}
                    </span>
                  </div>
                )}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Scheduled:</span>
                  <span className="font-semibold">
                    {client.scheduledAppointments}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Completed:</span>
                  <span className="font-semibold">
                    {client.completedAppointments}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="md:col-span-2">
            <div>
              <h3 className="text-lg font-semibold mb-3">Medical Notes</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Add New Note
                </h4>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2 mb-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={4}
                  placeholder="Enter your medical notes here..."
                />
                <div className="flex justify-end">
                  <button
                    onClick={handleAddComment}
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    <SaveIcon className="h-4 w-4 mr-1" />
                    Save Note
                  </button>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg divide-y divide-gray-200">
                {comments.map((c, i) => (
                  <div key={i} className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-500">{c.date}</span>
                    </div>
                    <p className="text-gray-700">{c.text}</p>
                  </div>
                ))}
                {comments.length === 0 && (
                  <div className="p-4 text-center text-gray-500">
                    No medical notes have been added yet.
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
