"use client";

interface BtnPrimaryProps {
  children: React.ReactNode; // 👈 Aquí se define el tipo
  onClick?: () => void;
  disabled: boolean;
}

function BtnPrimary({ children, onClick, disabled = false }: BtnPrimaryProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="submit"
      className="w-full cursor-pointer bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors"
    >
      {children}
    </button>
  );
}

export default BtnPrimary;
