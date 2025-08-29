"use client";

import { ReactNode, useState } from "react";
import ProtectedRoute from "@/components/protectedRoute";
import { Sidebar } from "@/app/perfil/Sidebar";
import { MenuIcon, LogOut } from "lucide-react";
import { logout } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function PerfilLayout({ children }: { children: ReactNode }) {
  // El estado ahora solo afecta al sidebar en escritorio
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/"); // Redirige al home
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <ProtectedRoute>
      <div className="flex h-screen bg-gray-50">
        {/* Sidebar responsivo */}
        <Sidebar isOpen={sidebarOpen} />

        {/* Contenedor principal */}
        <div className="flex flex-col flex-1 overflow-y-auto">
          {/* Header */}
          <header className="bg-white shadow-sm z-10">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  {/* --- CAMBIO CLAVE AQUÍ --- */}
                  {/* Este botón ahora solo es visible en escritorio (md en adelante) */}
                  <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="hidden md:block p-2 rounded-md text-gray-500 hover:text-gray-900 focus:outline-none"
                  >
                    <MenuIcon className="h-6 w-6" />
                  </button>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleLogout}
                    className="p-1 rounded-full text-gray-500 hover:text-gray-900 focus:outline-none"
                  >
                    <LogOut className="h-6 w-6 text-red-500 cursor-pointer" />
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Aquí se renderizan las páginas hijas */}
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
