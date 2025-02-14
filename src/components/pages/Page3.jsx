'use client'
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Page3({ onNext }) {
  const texto = "Y finalmente llegara el día que tanto soñamos,  prometere amarte por el resto de mis días. Eres mi todo, mi razón de ser y la persona con la que quiero compartir cada amanecer y cada atardecer. Este momento es el inicio de nuestra eternidad juntos, y no puedo imaginar un futuro sin ti. Gracias por elegirme, por amarme y por ser la mujer increíble que eres. Hoy, no solo celebramos nuestro amor, sino el comienzo de una vida llena de felicidad, complicidad y sueños cumplidos. Te amo, hoy y siempre.";
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
      <Image width={500} height={300} src="/images/img5.png" alt="Imagen"/>
      <h1>{displayedText}</h1>
      <button onClick={onNext} className="mt-4 p-2 bg-red-500 text-white rounded">
        Continuar❤
      </button>
    </div>
  );
}
