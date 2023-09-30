import React, { useEffect, useState } from "react";
import Navbar from "../global/Navbar";
import Acordion from "../global/accordion";
import List from "./components/list";
import Player from "./components/play";

/** 
   * [
            [
              "aa",
              [
                {
                  name: "Leslie Alexander",
                  href: "",
                  Desc: "leslie.s@example.com",
                },
              ],
            ],
          ]
  */
function App() {
  const [videoLinks, setVideoLinks] = useState([]); // Estado para almacenar videoLinks

  useEffect(() => {
    // Obtener el valor del parámetro 'curso' de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const curso = urlParams.get("curso");

    // Comprobar si 'curso' tiene un valor y realizar la solicitud fetch
    if (curso) {
      // Construir la URL de la solicitud fetch
      const apiUrl = `http://localhost:3000/cursos?course=${curso}`;

      // Realizar la solicitud fetch
      fetch(apiUrl)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Error en la solicitud fetch");
          }
        })
        .then((data) => {
          // Obtener 'videoLinks' de la respuesta y almacenar en el estado
          console.log(data.user[0].videoLinks)
          if (data.user[0].videoLinks) {
            setVideoLinks(data.user[0].videoLinks);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);
  return (
    <>
      <Navbar />
      <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          {videoLinks.map((item, index) => (
            <Acordion
              key={index}
              accordionName={item[0]}
              content={<List people={item[1]} />}
            />
          ))}
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <Player link="https://platform.thinkific.com/videoproxy/v1/play/ce7ofnh9oor6qvkc1740?&autoplay=true&crosstime=164" />
      </div>
    </>
  );
}

export default App;
