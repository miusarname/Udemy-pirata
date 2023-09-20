import React, { useState } from "react";

export default function Example({link}) {
  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <>
          <iframe
        src={link}
        id="iframe-ember4575"
        allow="autoplay"
        title="Video Lesson"
        className="_videoproxy__iframe_3iu414"
        width="1200" // Ajusta el ancho según tus necesidades
        height="675" // Ajusta el alto según tus necesidades
      ></iframe>
          </>{" "}
        </div>
      </main>
    </>
  );
}
