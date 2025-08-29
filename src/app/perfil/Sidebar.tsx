import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  UserIcon,
  LayoutDashboardIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
}

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  title: string;
  hasDropdown?: boolean;
  children?: React.ReactNode;
  isSidebarOpen: boolean; // Prop para saber si el sidebar de escritorio está abierto
}

// Se ha modificado NavItem para ser responsivo
function NavItem({
  to,
  icon,
  title,
  hasDropdown = false,
  children,
  isSidebarOpen,
}: NavItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // La lógica de Dropdown la mantendremos solo para escritorio por simplicidad
  if (hasDropdown) {
    return (
      <div className="hidden md:block mb-1">
        {" "}
        {/* Oculto en móvil */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md group"
        >
          <span className="mr-3">{icon}</span>
          <span className="flex-1 text-left">{title}</span>
          {isOpen ? (
            <ChevronDownIcon className="h-4 w-4" />
          ) : (
            <ChevronRightIcon className="h-4 w-4" />
          )}
        </button>
        {isOpen && <div className="pl-10 mt-1 space-y-1">{children}</div>}
      </div>
    );
  }

  const isActive = pathname === to;

  return (
    <Link
      href={to}
      className={`
        flex flex-col items-center justify-center p-2 rounded-md transition-colors duration-200
        md:flex-row md:justify-start md:px-4 md:py-2 md:mb-1
        ${
          isActive
            ? "text-teal-700 md:bg-teal-100"
            : "text-gray-600 hover:bg-gray-100"
        }
      `}
    >
      {/* Icono */}
      <span className="md:mr-3">{icon}</span>

      {/* Título */}
      <span
        className={`
          text-xs mt-1 
          md:text-base md:mt-0 
          ${
            isSidebarOpen ? "md:inline" : "md:hidden"
          } // Oculta el texto en escritorio si el sidebar está colapsado
        `}
      >
        {title}
      </span>
    </Link>
  );
}

// Componente Sidebar modificado para ser responsivo
export function Sidebar({ isOpen }: SidebarProps) {
  return (
    <div
      className={`
        bg-white z-50 transition-all duration-300 ease-in-out
        
        // --- Estilos para Móvil (por defecto) ---
        fixed bottom-0 w-full h-16 border-x-teal-600
        
        // --- Estilos para Escritorio (a partir de 'md') ---
        md:relative md:h-screen md:border-t-0 md:border-r
        ${isOpen ? "md:w-64" : "md:w-20"}
      `}
    >
      {/* --- Encabezado: Solo visible en escritorio --- */}
      <div className="hidden md:flex items-center justify-center h-16 ">
        <h1
          className={`text-xl font-bold text-gray-800 ${!isOpen && "hidden"}`}
        >
          Dashboard
        </h1>
        {!isOpen && <LayoutDashboardIcon className="h-6 w-6 text-gray-800" />}
      </div>

      {/* --- Contenedor de Navegación --- */}
      <nav
        className="
          flex justify-around items-center h-full
          md:flex-col md:items-stretch md:h-auto md:p-4
        "
      >
        <NavItem
          to="/perfil/panel"
          icon={<LayoutDashboardIcon className="h-5 w-5" />}
          title="Panel"
          isSidebarOpen={isOpen}
        />
        <NavItem
          to="/perfil/user"
          icon={<UserIcon className="h-5 w-5" />}
          title="Profile"
          isSidebarOpen={isOpen}
        />
        {/* Agrega más NavItems aquí si es necesario */}
      </nav>
    </div>
  );
}
