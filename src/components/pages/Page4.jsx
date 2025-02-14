"use client";
import { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import Image from "next/image";
import "./page4.sass";

export default function Page4() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showModal, setShowModal] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false); // Nuevo estado para verificar si la imagen está cargada
  const nodeRef = useRef(null); // Referencia a la imagen movible

  // Función para actualizar la posición cuando se suelta la imagen
  const handleStop = (e, data) => {
    setPosition({ x: data.x, y: data.y });

    // Asegurarnos de que la imagen haya sido cargada
    if (!imageLoaded) return;

    // Detectar colisión con la otra imagen
    const nidian = nodeRef.current.getBoundingClientRect();
    const diego = document.querySelector(".imgDiego").getBoundingClientRect();

    console.log("Nidian Rect:", nidian);
    console.log("Diego Rect:", diego);

    // Verificar si las imágenes se tocan
    if (
      nidian.left < diego.right &&
      nidian.right > diego.left &&
      nidian.top < diego.bottom &&
      nidian.bottom > diego.top
    ) {
      console.log("¡Colisión detectada!"); // Asegúrate de que la colisión se detecte
      setShowModal(true); // Mostrar el modal si hay colisión
    }
  };

  // Esta función se ejecuta cuando la imagen de Nidian se carga completamente
  const handleImageLoad = () => {
    setImageLoaded(true);
    console.log("Imagen cargada");
  };

  console.log("showModal:", showModal); // Verifica si showModal está cambiando correctamente

  return (
    <>
      <div className="imageBackground"></div>

      {/* Imagen estática (Diego) */}
      <Image className="imgDiego" src="/images/diego.jpg" width={80} height={100} alt="Diego" />

      {/* Imagen arrastrable (Nidian) */}
      <Draggable
        position={position}
        onStop={handleStop}
        touchAction="none"
        nodeRef={nodeRef} // Usamos ref para la imagen arrastrable
      >
        <div ref={nodeRef} className="draggable-image">
          <Image
            className="imgNidian"
            src="/images/nidian.jpg"
            width={70}
            height={100}
            alt="Nidian"
            onLoadingComplete={handleImageLoad} // Verifica que la imagen se ha cargado
          />
        </div>
      </Draggable>

      {/* Modal cuando las imágenes colisionan */}
      {showModal && (
        <div
          className="modal"
          style={{
            position: "fixed", // Cambié absolute por fixed para asegurar que esté centrado en toda la pantalla
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo semitransparente
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "1000", // Asegúrate de que el modal esté por encima de otros elementos
          }}
        >
          <div
            style={{
              backgroundColor: "white", // Fondo blanco para el modal
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <p>¡Felicidades! Has unido a Diego con su amor 💖</p>
            <button onClick={() => setShowModal(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
}
