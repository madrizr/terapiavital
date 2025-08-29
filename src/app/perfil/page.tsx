"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const PerfilPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/perfil/panel"); // Redirige automáticamente
  }, [router]);

  return null; // opcionalmente un loader
};

export default PerfilPage;
