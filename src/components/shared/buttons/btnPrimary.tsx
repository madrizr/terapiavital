"use client";

// Se añade la nueva prop opcional `isLoading`
interface BtnPrimaryProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled: boolean;
  isLoading?: boolean;
}

function BtnPrimary({
  children,
  onClick,
  disabled = false,
  isLoading = false, // Se le da un valor por defecto
}: BtnPrimaryProps) {
  return (
    <button
      onClick={onClick}
      // El botón se deshabilita si `disabled` o `isLoading` es true
      disabled={disabled || isLoading}
      type="submit"
      // Se añaden clases para centrar el contenido (el texto o el spinner)
      className="w-full flex items-center justify-center cursor-pointer bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors disabled:bg-teal-900 disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {/* Se renderiza el spinner o el texto según el estado de `isLoading` */}
      {isLoading ? (
        <div
          className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"
          role="status"
          aria-label="cargando"
        ></div>
      ) : (
        children
      )}
    </button>
  );
}

export default BtnPrimary;
