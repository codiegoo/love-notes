'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import './page.sass'

export default function Page1({ onNext }) {
  const texto = "Nidian, hoy celebramos nuestro segundo San Valentín juntos, y cada día a tu lado ha sido un regalo del universo. Recuerdo la primera vez que te vi, cómo tu sonrisa iluminó mi mundo y cómo, desde entonces, mi vida ha estado llena de colores que nunca antes había visto. Contigo, cada momento es especial, cada risa es única y cada abrazo es mi refugio. Gracias por ser mi compañera, mi confidente y mi razón para sonreír. Te amo más de lo que las palabras pueden expresar.";
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
      <div className="imageContain">
        <Image width={150} height={200} src="/images/img3.png" alt="Imagen"/>
        <Image width={200} height={250} src="/images/img4.png" alt="Imagen"/>
      </div>
      <h1 >{displayedText}</h1>
      <button onClick={onNext}>
        Continuar❤
      </button>
    </div>
  );
}
