import React, { useState } from "react";
import List from "../video/components/list";

const Accordion = ({ accordionName, content = <List /> }) => {
  // Creamos un estado local para el acordeón con el nombre proporcionado en las props
  const [isOpen, setIsOpen] = useState(false);

  // Función para cambiar el estado del acordeón
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="bg-white shadow-md rounded">
        {/* Encabezado del Acordeón */}
        <div className="border-b p-4 cursor-pointer" onClick={toggleAccordion}>
          <h2 className="text-lg font-semibold">{accordionName}</h2>
        </div>
        {/* Contenido del Acordeón (se muestra u oculta según el estado) */}
        {isOpen && <>{content}</>}
      </div>
    </div>
  );
};

export default Accordion;
