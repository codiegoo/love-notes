'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import './page.sass'

export default function Page2({ onNext }) {
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
        <Image width={200} height={400} src="/images/img1.png" alt="Imagen"/>
        <Image width={200} height={400} src="/images/img2.png" alt="Imagen"/>
      </div>
      <h1 >{displayedText}</h1>
      <button onClick={onNext}>
        Continuar❤
      </button>
    </div>
  );
}
