import Navbar from "../global/Navbar";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import Hero from "../global/Hero";
import Cta from "../global/CTA";
import List from "../global/allCourses";
import Footer from "../global/footer";

export let inforCode

function setCookie(nombre, valor, horas) {
  document.cookie = nombre + "=" + valor + ";";
}
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
export function deleteCookie(nombre) {
  document.cookie =
    nombre + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function Home() {
  const [products, setProducts] = useState([]);
  const [organizedUserData, setOrganizedUserData] = useState([]);
  const urlParams = new URLSearchParams(window.location.search);
  const courseName = urlParams.get("c") || 1;


  async function getdate() {
    if (courseName != 1) {
      const urle = window.location.href;
      const index = urle.indexOf("?");
      setCookie('link',courseName)
     setTimeout(async() => {
      const response = await fetch("http://192.168.129.72:3000/encript", {
        mode:"no-cors",
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
      setCookie("credd",data.url)
     }, 2000);

      
      var parsedData = data;
      let parsedData2 = data;
      // Asegúrate de que parsedData no sea undefined antes de establecer la cookie
      if ((await parsedData) != undefined) {
        console.log(parsedData,'aa')
        setCookie("Credentials", 'True');
        try {
          setCookie("Credentials2", parsedData2.urle);
        } catch (error) {
          console.log('fasho')
        }
        localStorage.setItem('CrendentialsInfo', parsedData2.urle);

        const baseUrl = index !== -1 ? urle.slice(0, index) : urle;
        // Redireccionar a una nueva URL
        window.location.href = baseUrl;
      }
    }
    return inforCode
  }

  useEffect(() => {
    // Realizar la solicitud Fetch aquí y asignar los datos a los estados locales
    getdate();
    console.log(inforCode,'a')
    setCookie("Credentials", 'True');
    console.log(getCookie("Credentials"),'a')
    if (!getCookie("Credentials")) {
      window.location.href = "/";
    }

    fetch("http://192.168.129.72:3000/list-all-courses")
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
              videoLinks: user.videoLinks,
            });

            tempOrganizedUserData.push({
              _id: user._id,
              name: user.name,
              description: user.description,
              href: user.href,
              imageSrc: user.imageSrc,
              imageAlt: user.imageAlt,
              videoLinks: user.videoLinks.map((videoLink) => {
                return {
                  name: videoLink[0],
                  links: videoLink[1].map((linkData) => ({
                    name: linkData.name,
                    href: linkData.href,
                    Desc: linkData.Desc,
                  })),
                };
              }),
            });
          });

          // Ordenar "products" en el orden especificado
          tempProducts.sort((a, b) => a.id - b.id);

          console.log(tempOrganizedUserData, "lista de product");
          console.log(tempProducts, "temporal");

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
    { name: "Talento", href: "#", current: false },
  ];

  console.log(products,'tu ver')
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
