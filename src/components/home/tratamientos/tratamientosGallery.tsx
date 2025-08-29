import { CardTratamiento } from "@/components/shared/cards/cardTratamiento";

const treatments = [
  {
    id: 1,
    name: "Acupuntura Tradicional",
    description:
      "Técnica milenaria que utiliza agujas finas para estimular puntos específicos del cuerpo y restaurar el flujo de energía (Qi).",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661864126669-1ace0fb6376f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Moxibustión",
    description:
      'Terapia que aplica calor en los puntos de acupuntura utilizando la hierba "moxa" para mejorar la circulación y aliviar el dolor.',
    imageUrl:
      "https://cdn.pixabay.com/photo/2022/08/06/15/39/city-7368852_1280.jpg",
  },
  {
    id: 3,
    name: "Ventosaterapia (Cupping)",
    description:
      "Aplicación de ventosas sobre la piel para crear succión, movilizar la sangre y la energía, y aliviar la tensión muscular.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2022/08/06/15/39/city-7368852_1280.jpg",
  },
  {
    id: 4,
    name: "Auriculoterapia",
    description:
      "Estimulación de puntos en la oreja que se corresponden con diferentes partes del cuerpo para tratar diversas afecciones.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661869039200-0b1553ced257?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Electroacupuntura",
    description:
      "Una forma moderna de acupuntura donde se aplica una pequeña corriente eléctrica a las agujas para potenciar el efecto terapéutico.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/09/13/15/41/mountain-8251186_1280.jpg",
  },
  {
    id: 6,
    name: "Masaje Tui Na",
    description:
      "Masaje terapéutico chino que trabaja sobre los meridianos y puntos de acupuntura para equilibrar el cuerpo y la mente.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2022/08/06/15/39/city-7368852_1280.jpg",
  },
];

function TratamientosGallery() {
  const galleryLayout = [
    {
      treatment: treatments[0],
      gridClasses: "col-start-1 col-span-3 row-start-1 row-span-4",
    },
    {
      treatment: treatments[1],
      gridClasses: "col-start-4 col-span-3 row-start-1 row-span-4",
    },
    {
      treatment: treatments[2],
      gridClasses: "col-start-1 col-span-3 row-start-5 row-span-3",
    },
    {
      treatment: treatments[3],
      gridClasses: "col-start-4 col-span-3 row-start-5 row-span-3",
    },
    {
      treatment: treatments[4],
      gridClasses: "col-start-7 col-span-3 row-start-1 row-span-7",
    },
  ];
  return (
    <section className="mt-10 p-5">
      <div className="grid grid-cols-9 grid-rows-7 gap-2.5 h-[700px] w-full">
        {/* Se itera sobre el array de configuración usando .map() */}
        {galleryLayout.map(({ treatment, gridClasses }) => (
          <div key={treatment.id} className={gridClasses}>
            <CardTratamiento
              title={treatment.name}
              description={treatment.description}
              img={treatment.imageUrl}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TratamientosGallery;
