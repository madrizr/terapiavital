"use client";

import { useState } from "react";
import { loginWithEmail, signInWithGoogle } from "../lib/auth";
import { useRouter } from "next/navigation"; // ✅ CORRECTO en App Router

const LoginForm: React.FC = () => {
  const router = useRouter(); // hook para navegar
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleEmailLogin = async () => {
    setLoading(true);
    try {
      await loginWithEmail(email, password);
      router.push("/perfil"); // ✅ redirige después de login
    } catch (error: any) {
      alert(error.message || "Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await signInWithGoogle();
      router.push("/perfil"); // ✅ redirige después de login
    } catch (error: any) {
      alert(error.message || "Error al iniciar con Google");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 300, margin: "0 auto", textAlign: "center" }}>
      <h1>Iniciar sesión</h1>

      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", width: "100%", marginBottom: 8, padding: 8 }}
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          display: "block",
          width: "100%",
          marginBottom: 12,
          padding: 8,
        }}
      />

      <button
        onClick={handleEmailLogin}
        disabled={loading}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "8px",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        {loading ? "Cargando..." : "Login"}
      </button>

      <button
        onClick={handleGoogleLogin}
        disabled={loading}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#db4437",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        {loading ? "Cargando..." : "Login con Google"}
      </button>
    </div>
  );
};

export default LoginForm;
