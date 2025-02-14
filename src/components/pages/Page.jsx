'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import './page.sass'

export default function Page({ onNext }) {
  const texto = "Esto fue programado con mucho amor para el amor de mi vida, que nunca se pierdan los pequeños detalles en nuestra relacion, te amo Nidian ❤";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < texto.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + texto[index]);
        setIndex(index + 1);
      }, 50); // Velocidad de escritura

      return () => clearTimeout(timeout);
    }
  }, [index, texto]);

  return (
    <div className="pageContain">
      <Image width={400} height={400} src="/images/img6.png" alt="Imagen"/>
      <h1 className="text-3xl font-bold">{displayedText}</h1>
      <button onClick={onNext}>
        Continuar❤
      </button>
    </div>
  );
}
