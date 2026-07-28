import { ProgramDetail } from "@/components/ProgramDetail";

const programData = {
  id: "campamento-juvenil",
  title: "Campamento Juvenil Anual",
  description:
    "El Campamento Juvenil Anual es una experiencia transformadora de varios días donde jóvenes de todas las edades se reúnen en un entorno natural para fortalecer amistades, profundizar su fe y descubrir nuevas capacidades. El campamento combina actividades recreativas, talleres de liderazgo, momentos de reflexión espiritual y diversión sin límites.",
  impact:
    "Cada año, más de 150 jóvenes participan en el campamento, creando recuerdos que duran toda la vida. Muchos descubren vocaciones, superan miedos y regresan a sus comunidades con renovada determinación de servir. El campamento es un catalizador de transformación personal y comunitaria que fortalece el tejido social de Rivera Hernández.",
  gallery: [
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
  ],
};

export function ProgramCampamento() {
  return <ProgramDetail {...programData} />;
}
