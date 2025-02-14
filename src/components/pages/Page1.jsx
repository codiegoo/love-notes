'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import './page.sass'

export default function Page1({ onNext }) {
  const texto = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, velit!";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < texto.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + texto[index]);
        setIndex(index + 1);
      }, 100); // Velocidad de escritura

      return () => clearTimeout(timeout);
    }
  }, [index, texto]);

  return (
    <div className="pageContain">
      <div className="imageContain">
        <Image width={300} height={400} src="/images/img3.png" alt="Imagen"/>
        <Image width={300} height={350} src="/images/img4.png" alt="Imagen"/>
      </div>
      <h1 >{displayedText}</h1>
      <button onClick={onNext}>
        Continuar❤
      </button>
    </div>
  );
}
