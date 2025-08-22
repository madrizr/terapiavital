"use client";
import { useState } from "react";
import "./styles/Navbar.css";

const MenuIcon = ({ className = "", ...props }) => (
  <svg
    {...props}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

const CloseIcon = ({ className = "", ...props }) => (
  <svg
    {...props}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const Logo = () => (
  <div className="logo">
    <svg
      width="50"
      height="50"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="logo-icon"
    >
      <path
        d="M32 59C46.9117 59 59 46.9117 59 32C59 17.0883 46.9117 5 32 5C17.0883 5 5 17.0883 5 32C5 46.9117 17.0883 59 32 59Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 21C24 21 28 17 32 17C36 17 40 21 40 21"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        d="M24 43C24 43 28 47 32 47C36 47 40 43 40 43"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        d="M43 24C43 24 47 28 47 32C47 36 43 40 43 40"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        d="M21 24C21 24 17 28 17 32C17 36 21 40 21 40"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        d="M32 41C36.9706 41 41 36.9706 41 32C41 27.0294 36.9706 23 32 23C27.0294 23 23 27.0294 23 32C23 36.9706 27.0294 41 32 41Z"
        stroke="currentColor"
        strokeWidth="4"
      />
    </svg>
    <span className="logo-text">Acupuntura Vital</span>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Conóceme", href: "#" },
    { name: "Servicios", href: "#" },
    { name: "Contáctame", href: "#" },
    { name: "Tratamientos", href: "#" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="#">
          <Logo />
        </a>

        {/* Links desktop */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        {/* Botón hamburguesa */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="menu-button"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Abrir menú</span>
          {isOpen ? (
            <CloseIcon className="icon" />
          ) : (
            <MenuIcon className="icon" />
          )}
        </button>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="mobile-link">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
