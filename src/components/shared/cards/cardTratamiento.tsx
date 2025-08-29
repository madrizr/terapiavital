export const CardTratamiento = ({ title = "", description = "", img = "" }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
    {/* Contenedor de imagen con altura fija para consistencia en todos los tamaños de pantalla */}
    <div className="h-48 lg:h-2/4  w-full flex-shrink-0 overflow-hidden">
      <img
        src={img}
        alt={`Imagen de ${title}`}
        className="w-full h-full object-cover" // La imagen llena el contenedor
      />
    </div>
    {/* Contenedor de texto que ocupa el espacio restante */}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);
