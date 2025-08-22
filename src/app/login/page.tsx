"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LoginForm from "@/components/LoginForm";

const LoginPage: React.FC = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.replace("/perfil"); // 🔹 Redirige automáticamente si ya está logueado
    }
  }, [user, loading, router]);

  // Evita renderizar LoginForm mientras se verifica la sesión
  if (loading || user) return <p>Cargando...</p>;

  return <LoginForm />;
};

export default LoginPage;
