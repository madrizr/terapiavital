import { CardTratamiento } from "@/components/shared/cards/cardTratamiento";

const treatments = [
  {
    id: 1,
    name: "Acupuntura Tradicional",
    description:
      "Técnica milenaria que utiliza agujas finas para estimular puntos específicos del cuerpo y restaurar el flujo de energía (Qi).",
    imageUrl:
      "images/tratamientos/acupuntura.jpg",
  },
  {
    id: 2,
    name: "Moxibustión",
    description:
      'Terapia que aplica calor en los puntos de acupuntura utilizando la hierba "moxa" para mejorar la circulación y aliviar el dolor.',
    imageUrl:
      "images/tratamientos/moxa.jpg",
  },
  {
    id: 3,
    name: "Ventosaterapia (Cupping)",
    description:
      "Aplicación de ventosas sobre la piel para crear succión, movilizar la sangre y la energía, y aliviar la tensión muscular.",
    imageUrl:
      "images/tratamientos/ventosa.jpg",
  },
  {
    id: 4,
    name: "Auriculoterapia",
    description:
      "Estimulación de puntos en la oreja que se corresponden con diferentes partes del cuerpo para tratar diversas afecciones.",
    imageUrl:
      "images/tratamientos/auriculo.png",
  },
  {
    id: 5,
    name: "Electroacupuntura",
    description:
      "Una forma moderna de acupuntura donde se aplica una pequeña corriente eléctrica a las agujas para potenciar el efecto terapéutico.",
    imageUrl:
      "images/tratamientos/electropuntura.png",
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
      <div className="flex flex-col gap-5 lg:grid lg:grid-cols-9 lg:grid-rows-7 lg:gap-2.5 lg:h-[700px] w-full">
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
