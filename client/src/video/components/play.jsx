import React, { useState, useEffect } from "react";

export default function Example({ link }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [iframeHeight, setIframeHeight] = useState("675px");

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    // Calcula la altura disponible restando la altura de la barra de navegación
    const calculateIframeHeight = () => {
      const navbarHeight = 64; // Altura de la barra de navegación
      const windowHeight = window.innerHeight;
      const newHeight = windowHeight - navbarHeight;
      setIframeHeight(`${newHeight}px`);
    };

    // Calcula la altura del iframe cuando se carga la página y cuando cambia el tamaño de la ventana
    calculateIframeHeight();
    window.addEventListener("resize", calculateIframeHeight);

    return () => {
      window.removeEventListener("resize", calculateIframeHeight);
    };
  }, []);

  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900"></h1>
          <div className="flex items-center">
            {/* Botón de alternancia de la barra lateral en pantallas pequeñas */}
            <button
              onClick={openSidebar}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Discuriones/Comentarios
            </button>
          </div>

        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* Tu código del iframe */}
          <iframe
            src={link}
            id="iframe-ember4575"
            allow="autoplay"
            title="Video Lesson"
            className="_videoproxy__iframe_3iu414"
            width="100%" // Hacemos que el iframe sea responsive
            height={sidebarOpen ? "auto" : iframeHeight} // Ajustamos la altura en función de si la barra lateral está abierta o no
          ></iframe>
        </div>
      </main>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-50"
          onClick={closeSidebar}
        ></div>
      )}

      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        {/* Contenido del sidebar */}
        <div className="p-4">
          <h2 className="text-2xl font-semibold">Discusiones...</h2>
          {/* Agrega aquí tus elementos de menú */}
        </div>
      </div>

    </>
  );
}
