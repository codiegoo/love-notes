'use client'
import Page from "@/components/pages/Page";
import Page1 from "@/components/pages/Page1";
import Page2 from "@/components/pages/Page2";
import Page3 from "@/components/pages/Page3";
import Particle from "@/components/ParticleBackground/Particle";
import { useState } from "react";


export default function Home() {

  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    <Page key={0} onNext={() => setCurrentPage(1)} />,
    <Page1 key={1} onNext={() => setCurrentPage(2)} />,
    <Page2 key={2} onNext={() => setCurrentPage(3)} />,
    <Page3 key={3} onNext={() => console.log("Fin del recorrido")} />, // Última página
  ];

  return (
    <>
      {/* <Particle/> */} {/* Descomenta si lo necesitas */}
      {pages[currentPage]}
    </>
  );
}
