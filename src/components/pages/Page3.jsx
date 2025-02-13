'use client'
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Page3({ onNext }) {
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
    <>
      <h1 className="text-3xl font-bold">{displayedText}</h1>
      {/* <Image width={300} height={300} src="/images/img6.png" alt="Imagen"/> */}
      <button onClick={onNext} className="mt-4 p-2 bg-red-500 text-white rounded">
        Continuar❤
      </button>
    </>
  );
}
