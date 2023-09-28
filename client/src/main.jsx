import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from './home/home.jsx';
import  PlayerV  from "./video/Player.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/preview",
    element: <App />,
  },
  {
    path: "/video",
    element: <PlayerV />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
