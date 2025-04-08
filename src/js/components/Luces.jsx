// Importamos React y el hook useState para manejar el estado local del componente
import React, { useState } from "react";

// Definición del componente Luces
const Luces = ({ color, isActive, onClick }) => {
  return (
    <div
  className={`luces ${isActive ? "brillo" : ""}`} // Clase "brillo" si está activa
  style={{ backgroundColor: color }}
  onClick={onClick} // Maneja el clic desde el componente padre
></div>

  );
};



// Exportamos el componente para que pueda ser utilizado en otros archivos
export default Luces;