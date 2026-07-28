import { useEffect } from "react";
import { useLocation } from "wouter";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Primer scroll instantáneo inmediato
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    // Segundo scroll con requestAnimationFrame para garantizar posicionamiento exacto
    const rafId = requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    });

    // Tercera ejecución con pequeño delay (25ms) para casos extremos de renderizado lento
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }, 25);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, [pathname]);

  return null;
}
