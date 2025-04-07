import React from "react";
import Luces from "./Luces";


  
const Semaforo = () => {
  return (
    <div className="container text-center">

        <div className="palo"></div>
      <div className="semaforo">
        <Luces color="red" />
        <Luces color="yellow" />
        <Luces color="green" />
      </div>

      <h3>Semáforo</h3>

      <p>Entrego el proyecto a falta de añadir las funcionalidades extras del ejercicio</p>
     
        
    </div>
  );
};

export default Semaforo;