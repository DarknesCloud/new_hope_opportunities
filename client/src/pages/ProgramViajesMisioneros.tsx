import { ProgramDetail } from "@/components/ProgramDetail";

const programData = {
  id: "viajes-misioneros",
  title: "Viajes Misioneros",
  description:
    "Los Viajes Misioneros son expediciones de servicio que conectan a iglesias y brigadas internacionales con la comunidad de Rivera Hernández. Estos viajes van más allá de la construcción o los proyectos puntuales: buscan crear relaciones auténticas, intercambios culturales y compromisos a largo plazo que transforman tanto a los visitantes como a la comunidad local.",
  impact:
    "Desde 2013, cientos de misioneros de Estados Unidos y otros países han llegado a Rivera Hernández, participando en construcción, brigadas médicas, escuelas bíblicas de vacaciones y mentoría. Estos viajes han generado amistades duraderas, financiamiento para proyectos críticos y una red global de apoyo. La comunidad ha aprendido que el mundo se preocupa por ellos.",
  gallery: [
    "https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=600&h=400&fit=crop",
  ],
};

export function ProgramViajesMisioneros() {
  return <ProgramDetail {...programData} />;
}
