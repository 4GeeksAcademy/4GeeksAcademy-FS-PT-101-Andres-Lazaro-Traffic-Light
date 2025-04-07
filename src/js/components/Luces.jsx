// Importamos React y el hook useState para manejar el estado local del componente
import React, { useState } from "react";

// Definición del componente Luces
const Luces = ({ color }) => {
  // Declaramos un estado llamado isBrillo, que indica si la clase "brillo" está activa o no
  // Por defecto, el estado es "false" (no está activo).
  const [isBrillo, setIsBrillo] = useState(false)

  // Función que se ejecuta cuando el usuario hace clic en el div.
  // Alterna el valor de isBrillo entre "true" y "false"
  const handleClick = () => {
    setIsBrillo(!isBrillo); // Cambia el estado actual al contrario
  };

  // Renderizado del componente:
  return (
    <div
      // Añade la clase "luces" por defecto y, si isBrillo es true, también añade la clase "brillo"
      className={`luces ${isBrillo ? "brillo" : ""}`}

      // Define el color de fondo usando el valor de la propiedad "color" recibida como parámetro
      style={{ backgroundColor: color }}

      // Asigna el manejador de clic para alternar el estado al hacer clic
      onClick={handleClick}
    >



    </div>
    
  );
};

// Exportamos el componente para que pueda ser utilizado en otros archivos
export default Luces;