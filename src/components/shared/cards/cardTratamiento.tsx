export const CardTratamiento = ({ title = "", description = "", img = "" }) => (
  <div className="bg-white  w-full h-full rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ease-in-out">
    <img
      src={img}
      alt={`Imagen de ${title}`}
      className="w-full object-cover  h-2/4"
    />
    <div className="p-6  h-2/4">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);
