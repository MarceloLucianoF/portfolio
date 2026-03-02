import React, { useEffect, useRef, useState } from 'react';

export default function FadeIn({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    // Cria o "olheiro" do navegador
    const observer = new IntersectionObserver(
      (entries) => {
        // Se a seção entrar na tela (intersectar)
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Para de observar depois que já apareceu (economiza CPU)
          if (domRef.current) observer.unobserve(domRef.current);
        }
      },
      { threshold: 0.1 } // Dispara quando 10% da seção estiver visível
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      // Aqui usamos o Tailwind para gerenciar a transição
      className={`transition-all duration-1000 ease-out will-change-[opacity,transform] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}