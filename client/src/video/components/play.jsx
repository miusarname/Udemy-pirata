import React, { useState, useEffect } from "react";

export default function Example({ link }) {
  var temp_conteReal;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [iframeHeight, setIframeHeight] = useState("675px");
  const [comment, setComment] = useState(""); // Estado para el comentario
  const [comments, setComments] = useState([]); // Estado para almacenar los comentarios
  const urlParams = new URLSearchParams(window.location.search);
  const videolink = urlParams.get("m");

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Comentario enviado:", comment);
  
    try {
      const response = await fetch("http://localhost:3000/encript", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          encryptedValue: videolink,
        }),
      });
      
      if (response.ok) {
        const data = await response.json();
        temp_conteReal = data.url;
        console.log(temp_conteReal, "aaaalla");
      } else {
        console.log("Error en la solicitud al servidor");
        return;
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      return;
    }
  
    // Crear el objeto de comentario a enviar a la API
    const newComment = {
      content: comment,
      author: "invitado", // Debes reemplazarlo con el autor real
      videoId: temp_conteReal, // Utilizamos el enlace al video como videoId
    };
  
    console.log(newComment, "importado");
  
    try {
      const createCommentResponse = await fetch("http://localhost:3000/create-comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      });
  
      if (createCommentResponse.ok) {
        const data = await createCommentResponse.json();
        console.log(data, "datas");
        if (data.message === "success") {
          setComments([...comments, newComment]);
        }
      } else {
        console.log("Error al crear el comentario");
      }
    } catch (error) {
      console.error("Error al crear el comentario:", error);
    }
  
    setComment("");
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

    // Realiza la solicitud para obtener comentarios desde la API
    fetch(`http://localhost:3000/comments?video=${videolink}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "comments");
        if (data.message === "success") {
          setComments(data.res);
        }
      });

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
              Discusiones/Comentarios
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
          {/* Mostrar los comentarios en forma de chat */}
          <div className="mt-4 border-t border-gray-300">
            <h3 className="text-xl font-semibold">Comentarios</h3>
            <div className="mt-4">
              {comments.map((comment, index) => (
                <div
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-blue-100" : "bg-gray-100"
                  } p-2 rounded-md`}
                >
                  <p className="text-gray-700">
                    <strong>{comment.author}:</strong> {comment.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Formulario de comentarios debajo de los comentarios */}
        <div className="p-4 bg-white border-t fixed bottom-0 left-0 right-0">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="comment"
                className="block text-gray-700 font-bold mb-2"
              >
                Comentario:
              </label>
              <textarea
                id="comment"
                name="comment"
                rows="4"
                className="w-full border rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Enviar Comentario
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
