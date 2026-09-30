import { useEffect } from "react";
import { useLocation } from "wouter";

export function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    const scroll = () => {
      if (hash) {
        const target = document.getElementById(hash);
        if (target) {
          target.scrollIntoView({ behavior: "instant", block: "start" });
          return;
        }
      }

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    };

    scroll();
    const rafId = requestAnimationFrame(scroll);
    const timeoutId = setTimeout(scroll, 60);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, [location]);

  return null;
}
