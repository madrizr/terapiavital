"use client";

import React from "react";
import { useAuth } from "@/context/AuthContext";
import { logout } from "@/lib/auth";
import { useRouter } from "next/navigation";

const Perfil: React.FC = () => {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/"); // Redirige al home
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-800">{user.email}</span>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Cerrar sesión
        </button>
      </nav>

      {/* Contenido de perfil */}
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bienvenido, {user.email}</h1>
        <p>
          Esta es tu página de perfil. Aquí puedes ver tu información y
          administrar tu cuenta.
        </p>
      </main>
    </div>
  );
};

export default Perfil;
