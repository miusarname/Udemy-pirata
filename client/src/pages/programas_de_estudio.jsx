import List from "../global/allCourses";
import  { useState, useEffect } from "react";
import Navbar from "../global/Navbar";

export default function ProgramaDeStudio() {
  const [products, setProducts] = useState([]);
  const [organizedUserData, setOrganizedUserData] = useState([]);

  useEffect(() => {
    // Realizar la solicitud Fetch aquí y asignar los datos a los estados locales
    fetch("http://localhost:3000/list-all-courses")
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "success") {
          const tempProducts = [];
          const tempOrganizedUserData = [];

          data.user.forEach((user, index) => {
            tempProducts.push({
              id: index + 1,
              name: user.name,
              href: user.href,
              imageSrc: user.imageSrc,
              imageAlt: user.imageAlt,
              description: user.description,
              videoLinks: user.videoLinks
            });

            tempOrganizedUserData.push({
              _id: user._id,
              name: user.name,
              description: user.description,
              href: user.href,
              imageSrc: user.imageSrc,
              imageAlt: user.imageAlt,
              videoLinks: user.videoLinks.map((videoLink) => ({
                name: videoLink[0],
                links: videoLink[1].map((linkData) => ({
                  name: linkData.name,
                  href: linkData.href,
                  Desc: linkData.Desc,
                })),
              })),
            });
          });

          // Ordenar "products" en el orden especificado
          tempProducts.sort((a, b) => a.id - b.id);

          // Actualizar los estados locales
          setProducts(tempProducts);
          setOrganizedUserData(tempOrganizedUserData);
        }
      })
      .catch((error) => {
        console.error("Error al realizar la solicitud Fetch:", error);
      });
  }, []);

  let navbarContains = [
    { name: "Todos los Cursos ", href: "/allcourses", current: true    },
    { name: "Programas de Estudio ", href: "home", current: false },
    { name: "Talento", href: "#", current: false },
  ];
  return (
    <div>
      <Navbar navigation={navbarContains} />
      <List title="Cursos" products={products} />
    </div>
  );
}
