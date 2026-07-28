import { ProgramDetail } from "@/components/ProgramDetail";

const programData = {
  id: "banda-de-la-paz",
  title: "Banda de la Paz",
  description:
    "La Banda de la Paz es un programa de música comunitaria que utiliza instrumentos de viento y percusión para fortalecer la identidad cultural de Rivera Hernández. Los estudiantes no solo aprenden a tocar instrumentos, sino que se convierten en embajadores de esperanza que representan a New Hope Opportunities en eventos públicos y celebraciones comunitarias.",
  impact:
    "Con más de 60 músicos activos, la Banda de la Paz ha tocado en festivales regionales, desfiles cívicos y eventos internacionales. Cada presentación es una declaración de que los jóvenes de Rivera Hernández tienen talento, dignidad y un futuro brillante. La música se convierte en un puente entre generaciones y culturas.",
  gallery: [
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=400&fit=crop",
  ],
};

export function ProgramBandaPaz() {
  return <ProgramDetail {...programData} />;
}
