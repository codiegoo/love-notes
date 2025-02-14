'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import './page.sass'

export default function Page2({ onNext }) {
  const texto = "Han pasado dos años de complicidad, de sueños compartidos y de un amor que crece cada día. Nidian, contigo he aprendido que el amor no solo se siente, sino que se construye. Juntos hemos superado desafíos, celebrado victorias y soñado con un futuro lleno de promesas. Cada día a tu lado me recuerda por qué elegí amarte: por tu bondad, tu fuerza y tu capacidad de hacer que todo a nuestro alrededor sea mejor. Estoy emocionado por todo lo que nos espera, especialmente por el día en que digamos 'sí' para siempre.";
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
        <Image width={150} height={300} src="/images/img1.png" alt="Imagen"/>
        <Image width={150} height={300} src="/images/img2.png" alt="Imagen"/>
      </div>
      <h1 >{displayedText}</h1>
      <button onClick={onNext}>
        Continuar❤
      </button>
    </div>
  );
}
