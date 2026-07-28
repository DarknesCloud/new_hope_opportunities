import { ProgramDetail } from "@/components/ProgramDetail";

const programData = {
  id: "chicos",
  title: "CHICOS",
  description:
    "CHICOS es un programa de liderazgo y mentoría diseñado para jóvenes que desean desarrollar habilidades de comunicación, pensamiento crítico y servicio comunitario. A través de talleres, debates y proyectos prácticos, los estudiantes aprenden a ser agentes de cambio en sus propias comunidades.",
  impact:
    "Más de 45 jóvenes participan activamente en CHICOS, desarrollando competencias que los preparan para la universidad y el liderazgo profesional. El programa ha generado iniciativas comunitarias impulsadas por estudiantes, desde campañas de salud hasta proyectos de reforestación. Estos jóvenes se convierten en modelos para sus hermanos menores.",
  gallery: [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  ],
};

export function ProgramCHICOS() {
  return <ProgramDetail {...programData} />;
}
