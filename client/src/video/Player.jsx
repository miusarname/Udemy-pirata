import React, { useEffect, useState } from "react";
import Navbar from "../global/Navbar";
import Acordion from "../global/accordion";
import List from "./components/list";
import Player from "./components/play";

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const courseName = urlParams.get("curso") || 1;
  const [videoLinks, setVideoLinks] = useState([]);
  const [videoUrl, setVideoUrl] = useState(
    "https://platform.thinkific.com/videoproxy/v1/play/cehovah05o4e97oc6pd0?&autoplay=true&crosstime=203"
  );

  useEffect(() => {
    const curso = urlParams.get("curso");
    const mParam = urlParams.get("m");

    const fetchData = async () => {
      try {
        if (curso) {
          const apiUrl = `http://localhost:3000/cursos?course=${curso}`;
          const response = await fetch(apiUrl);

          if (!response.ok) {
            throw new Error("Error en la solicitud fetch");
          }

          const data = await response.json();

          if (data.user[0].videoLinks) {
            setVideoLinks(data.user[0].videoLinks);
          }
        }

        if (mParam) {
          const response = await fetch("http://localhost:3000/encript", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ encryptedValue: mParam }),
          });

          if (!response.ok) {
            throw new Error("Error en la solicitud fetch de desencriptación");
          }

          const data = await response.json();
          setVideoUrl(data.url);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [urlParams]);

  return (
    <>
      <Navbar />
      {/* <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      > */}
      {/* <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800"> */}
      {videoLinks.map((item, index) => (
        <Acordion
          key={index}
          accordionName={item[0]}
          content={<List people={item[1]} coursenam={courseName} />}
        />
      ))}
      {/* </div> */}
      {/* </aside> */}

      {videoLinks.map((item, index) => (
        <div className="a" key={index}>
          <Player link={videoUrl} />
        </div>
      ))}
    </>
  );
}

export default App;
