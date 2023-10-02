import React, { useState, useEffect } from "react";

export default function Example({ link }) {
  const [iframeHeight, setIframeHeight] = useState("675px");
  const [comment, setComment] = useState(""); // Estado para el comentario
  const [comments, setComments] = useState([]); // Estado para almacenar los comentarios
  const urlParams = new URLSearchParams(window.location.search);
  const videolink = urlParams.get("m");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Comentario enviado:", comment);

    const newComment = {
      content: comment,
      author: "invitado", // Debes reemplazarlo con el autor real
      videoId: videolink, // Utilizamos el enlace al video como videoId
    };

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
      {/* <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900"></h1>
        </div>
      </header> */}
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
            height={iframeHeight} // Ajustamos la altura en función del tamaño de la ventana
          ></iframe>
        </div>
        {/* Mostrar los comentarios debajo del video */}
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Comentarios</h2>
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
          {/* Formulario de comentarios debajo de los comentarios */}
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
      </main>
    </>
  );
}
