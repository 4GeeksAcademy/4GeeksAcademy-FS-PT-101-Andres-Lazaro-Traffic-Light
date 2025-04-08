import React, { useState } from "react";
import Luces from "./Luces";


  

const Semaforo = () => {
  const [colors, setColors] = useState(["red", "yellow", "green"]); // Estado inicial para los colores
  const [activeLight, setActiveLight] = useState(null); // Estado para manejar cuál luz tiene brillo

  // Función para cambiar los colores de las bolas de forma aleatoria
  const randomizeColors = () => {
    const possibleColors = ["red", "yellow", "green"];
    const newColors = colors.map(() =>
      possibleColors[Math.floor(Math.random() * possibleColors.length)]
    );
    setColors(newColors); // Actualiza el estado con los nuevos colores
  };



  const addColor =() =>{
    const addnewColor = ["purple"];
    const newColors = colors.map(() =>
      addnewColor[Math.floor(Math.random() * possibleColors.length)]
    );
    setColors(newColors); // Actualiza el estado con los nuevos colores
  }

  return (
    <div className="container text-center">
      <div className="palo"></div>
      <div className="semaforo">
        {/* Renderizamos las luces con color dinámico y manejo de brillo */}
        <Luces
          color={colors[0]}
          isActive={activeLight === 0}
          onClick={() => setActiveLight(0)} // Activa brillo para la luz 0
          
        />
        <Luces
          color={colors[1]}
          isActive={activeLight === 1}
          onClick={() => setActiveLight(1)} // Activa brillo para la luz 1
        />
        <Luces
          color={colors[2]}
          isActive={activeLight === 2}
          onClick={() => setActiveLight(2)} // Activa brillo para la luz 2
        />
        
      </div>
      {/* Botón para cambiar colores aleatoriamente */}
      <button
        onClick={randomizeColors} className="btn btn-success"
        style={{ marginTop: "20px", padding: "10px 20px" }}>Cambiar Colores Aleatoriamente
      </button>

    </div>
  );
};



export default Semaforo;