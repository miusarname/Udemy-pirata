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
  const [videoLinks, setVideoLinks] = useState([]);
  const [videoUrl, setVideoUrl] = useState(
    "https://platform.thinkific.com/videoproxy/v1/play/cehovah05o4e97oc6pd0?&autoplay=true&crosstime=203"
  );

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const curso = urlParams.get("curso");

    if (curso) {
      const apiUrl = `http://localhost:3000/cursos?course=${curso}`;

      fetch(apiUrl)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Error en la solicitud fetch");
          }
        })
        .then((data) => {
          if (data.user[0].videoLinks) {
            setVideoLinks(data.user[0].videoLinks);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }

    const mParam = urlParams.get("m");
    if (mParam) {
      fetch("http://localhost:3000/encript", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ encryptedValue: mParam }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Error en la solicitud fetch de desencriptación");
          }
        })
        .then((data) => {
          // Cambia la URL del video a la URL desencriptada
          setVideoUrl(data.url);
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
        <Player link={videoUrl} />{" "}
      </div>
    </>
  );
}

export default App;
