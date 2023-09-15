import React, { useState } from "react";

const Accordion = ({ accordionName, content }) => {
  // Creamos un estado local para el acordeón con el nombre proporcionado en las props
  const [isOpen, setIsOpen] = useState(false);

  // Función para cambiar el estado del acordeón
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <div className="bg-white shadow-md rounded">
        {/* Encabezado del Acordeón */}
        <div className="border-b p-4 cursor-pointer" onClick={toggleAccordion}>
          <h2 className="text-lg font-semibold">{accordionName}</h2>
        </div>
        {/* Contenido del Acordeón (se muestra u oculta según el estado) */}
        {isOpen && (
          <div className="p-4">
            <p> {content}.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
