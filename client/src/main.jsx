import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Login from "./log/login.jsx";
import Home from "./home/home.jsx";
import AllCourses from './pages/programas_de_estudio.jsx';
import PlayerV from "./video/Player.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/preview",
    element: <App />,
  },
  {
    path: "/video",
    element: <PlayerV />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path:"/allcourses",
    element:<AllCourses/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
