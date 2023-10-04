import React, { useEffect, useState } from "react";
import Navbar from "../global/Navbar";
import { getCookie } from '../home/home';
import Info from "./components/information";

function Profile() {
  const [cookieName, setCookieName] = useState("")
  const [Role, setRole] = useState('')

  useEffect(() => {
    const credentials = JSON.parse(getCookie("Credentials"));
    console.log(credentials,'aa')
    setCookieName(credentials.global_name);
  }, []);

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 2fr 1fr", // Divide en tres columnas, la del medio es el doble de ancho
    height: "100vh", // Establece la altura al 100% de la ventana
  };

  const infoStyle = {
    gridColumn: "2 / 3", // Coloca el componente Info en la segunda columna (la del medio)
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div>
      <Navbar />
      <Info name={cookieName} />
    </div>
  );
}

export default Profile;
