"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AboutMe } from "@/components/home/Aboutme";
import Contact from "@/components/home/contact";
import HeaderComponent from "@/components/home/Header";
import InfoServices from "@/components/home/Info-services";
import Servicios from "@/components/home/Servicios";
import Terapias from "@/components/home/Terapias";
import Testimonials from "@/components/home/Testimonials";
import Navbar from "@/components/layout/Navbar";
import { useAuth } from "@/context/AuthContext";
import { logout } from "@/lib/auth";
import Link from "next/link";

function HomePage() {
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      alert("Logged out!");
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    // <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
    //   {user ? (
    //     <div>
    //       <p>Hola, {user.email}</p>
    //       <button onClick={handleLogout}>Cerrar sesión</button>
    //     </div>
    //   ) : (
    //     <div>
    //       <p>No estás logueado</p>
    //       <Link href="/login">
    //         <button>Login</button>
    //       </Link>
    //       <Link href="/signup">
    //         <button>Sign Up</button>
    //       </Link>
    //     </div>
    //   )}

    //   <hr style={{ margin: "2rem 0" }} />

    //   <div>
    //     <p>Rutas protegidas:</p>
    //     <Link href="/protected">
    //       <button>Protected Page</button>
    //     </Link>
    //     <Link href="/perfil">
    //       <button>Perfil</button>
    //     </Link>
    //   </div>
    // </div>
    <>
      <Navbar />
      <HeaderComponent />
      <AboutMe />
      <Terapias />
      <Servicios />
      <InfoServices />
      <Testimonials />
      <Contact />
    </>
  );
}

export default HomePage;
