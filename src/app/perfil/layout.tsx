"use client";

import { ReactNode } from "react";
import ProtectedRoute from "@/components/protectedRoute";

export default function PerfilLayout({ children }: { children: ReactNode }) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}
