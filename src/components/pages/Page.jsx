'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import './page.sass'
import Card from "../card/Card";

export default function Page({ onNext }) {
  const texto = "Feliz 1 año 3 meses mi niña preciosa!❤";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCard, setShowCard] = useState(false);

  // Lista de imágenes
  const imagenes = [
    "/images/aniversario/img1.jpg",
    "/images/aniversario/img2.jpg",
    "/images/aniversario/img3.jpg",
    "/images/aniversario/img4.jpg",
    "/images/aniversario/img5.jpg",
    "/images/aniversario/img6.jpg",
    "/images/aniversario/img7.jpg",
    "/images/aniversario/img8.jpg",
    "/images/aniversario/img9.jpg",
    "/images/aniversario/img10.jpg",
    "/images/aniversario/img11.jpg",
    "/images/aniversario/img12.jpg",
  ];
  const [imagenActual, setImagenActual] = useState(0);

  // Efecto de escribir el texto
  useEffect(() => {
    if (index < texto.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + texto[index]);
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  // Efecto para cambiar imágenes cada 3 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      setImagenActual((prev) => (prev + 1) % imagenes.length);
    }, 3000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="pageContain">
      <Image
        className="homeImage"
        width={400}
        height={400}
        src={imagenes[imagenActual]}
        alt={`Imagen ${imagenActual + 1}`}
        priority
      />
      <h1 className="text-3xl font-bold">{displayedText}</h1>

      <button onClick={() => setShowCard(true)}>
        Abrir cartita❤
      </button>

      {showCard && <Card setShowCard={setShowCard} />}
    </div>
  );
}
