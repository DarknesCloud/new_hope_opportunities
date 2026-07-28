import { ProgramDetail } from "@/components/ProgramDetail";

const programData = {
  id: "refugio",
  title: "Refugio",
  description:
    "Refugio es un programa de acompañamiento espiritual y emocional que ofrece un espacio seguro para que niños, jóvenes y adultos fortalezcan su fe, identidad y sentido de pertenencia. A través de retiros, grupos de oración, consejería y actividades comunitarias, se cultiva una espiritualidad auténtica centrada en Cristo.",
  impact:
    "Cientos de personas han encontrado en Refugio un lugar de sanación, esperanza y transformación espiritual. El programa ha acompañado a familias en crisis, ha fortalecido la fe de jóvenes en momentos de incertidumbre y ha creado una comunidad de fe vibrante. Cada testimonio es prueba de que Dios trabaja en Rivera Hernández.",
  gallery: [
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
  ],
};

export function ProgramRefugio() {
  return <ProgramDetail {...programData} />;
}
