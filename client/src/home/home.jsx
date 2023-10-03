import Navbar from "../global/Navbar";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import Hero from "../global/Hero";
import Cta from "../global/CTA";
import List from "../global/allCourses";
import Footer from "../global/footer";

export function getCookie(nombre) {
  const name = nombre + "=";
  const cookies = decodeURIComponent(document.cookie).split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
}

function Home() {
  const [products, setProducts] = useState([]);
  const [organizedUserData, setOrganizedUserData] = useState([]);
  const urlParams = new URLSearchParams(window.location.search);
  const courseName = urlParams.get("c") || 1;
  function setCookie(nombre, valor, diasParaExpirar) {
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + diasParaExpirar * 60 * 60 * 1000);
    const expira = "expires=" + fecha.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expira + ";path=/";
  }

  async function getdate() {
    if (courseName != 1) {
      const url = window.location.href;
      const index = url.indexOf("?");
      const response = await fetch("http://localhost:3000/encript", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ encryptedValue: courseName }),
      });

      if (!response.ok) {
        throw new Error("Error en la solicitud fetch de desencriptación");
      }

      const data = await response.json();
      var parsedData = data.url;
      setCookie("Credentials", parsedData, 0.5);
      const baseUrl = index !== -1 ? url.slice(0, index) : url;
      // Redireccionar a una nueva URL
      window.location.href = baseUrl;
    }
  }

  useEffect(() => {
    // Realizar la solicitud Fetch aquí y asignar los datos a los estados locales
    getdate();
    if (getCookie("Credentials") == "") {
      window.location.href = "/";
    }
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
              videoLinks: user.videoLinks.map((videoLink) => {
                return({
                name: videoLink[0],
                links: videoLink[1].map((linkData) => ({
                  name: linkData.name,
                  href: linkData.href,
                  Desc: linkData.Desc,
                })),
              })}),
            });
          });

          // Ordenar "products" en el orden especificado
          tempProducts.sort((a, b) => a.id - b.id);

          console.log(tempOrganizedUserData,'lista de product')
          console.log(tempProducts,'temporal')

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
    { name: "Todos los Cursos ", href: "/home", current: false },
    { name: "Programas de Estudio ", href: "/allcourses", current: false },
    { name: "CampusLands", href: "https://campuslands.com/", current: false },
    { name: "Talento", href: "#", current: false },
  ];

  return (
    <>
      <Navbar navigation={navbarContains} />
      <Hero
        images=""
        links={[]}
        content="Únete a cientos de miles de estudiantes"
        Title="Cursos para desarrolladores de frontend y backend"
      />
      <Cta
        title="¡Ahora estamos en DISCORD"
        text="¡Únete a nuestra nueva comunidad de estudiantes!"
        btnContent="Unirme a ahora"
        lateralImage={
          <img
            className=" w-[57rem]"
            src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png"
            alt="Nueva imagen"
          />
        }
      />
      <List title="Cursos" products={products} />
      <Hero
        images="https://www.htmlcsscolor.com/preview/gallery/581B91.png"
        links={[{ name: "Portal de estudiante", href: "#" }]}
        content="Conversa y debate con otros estudiantes sobre los cursos.
        Accede desde tu portal de estudiante al inscribirte a cualquier curso o suscripción."
        Title="¡Explora nuestra comunidad!"
      />
      <Footer />
    </>
  );
}

export default Home;
