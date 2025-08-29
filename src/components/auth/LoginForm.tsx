"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { loginWithEmail, signInWithGoogle } from "../../lib/auth";
import { useRouter } from "next/navigation"; // ✅ CORRECTO en App Router
import "./styles/loginForm.css";
import InputText from "../shared/inputs/input-text";
import BtnPrimary from "../shared/buttons/btnPrimary";

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

  return (
    <>
      <section className="container-login">
        <form className="form-login">
          <h1 className="title text-center text-2xl mb-4">Iniciar Sesión</h1>
          <InputText
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="my-4">
            <InputText
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <BtnPrimary onClick={handleEmailLogin} disabled={loading}>
            {loading ? "Cargando..." : "Login"}
          </BtnPrimary>
        </form>
      </section>
    </>
  );
};

export default LoginForm;
