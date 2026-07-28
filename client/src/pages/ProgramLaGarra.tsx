import { ProgramDetail } from "@/components/ProgramDetail";

const programData = {
  id: "la-garra",
  title: "La Garra",
  description:
    "La Garra es un programa de deporte y desarrollo de carácter que utiliza el fútbol como herramienta transformadora. A través de entrenamientos disciplinados y competencias amistosas, los estudiantes aprenden valores fundamentales como el trabajo en equipo, la resiliencia y la excelencia personal.",
  impact:
    "Cada día, más de 80 estudiantes participan en entrenamientos que van más allá del deporte. Aprenden a manejar la presión, a celebrar juntos, a superar fracasos y a representar a New Hope Opportunities con dignidad. El programa ha producido atletas que compiten a nivel nacional y jóvenes líderes que inspiran a sus comunidades.",
  gallery: [
    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=600&h=400&fit=crop",
  ],
};

export function ProgramLaGarra() {
  return <ProgramDetail {...programData} />;
}
