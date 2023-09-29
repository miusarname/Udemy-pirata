import Navbar from "../global/Navbar";
import Hero from "../global/Hero";
import Cta from "../global/CTA";
import List from "./components/allCourses";
import Footer from "../global/footer";

function Home() {
  let products = [
    {
      id: 1,
      name: "Node.Js: De cero a experto",
      href: "#",
      imageSrc: "https://midu.dev/images/tags/node.png",
      imageAlt: "Logo Node",
      color:
        "Aprende Node.js desde los fundamentos, usos comunes y no tan comunes, despliegues, construcción de imágenes, testing y muchas más habilidades que son necesarias hoy en día con este runtime-environment de JavaScript.",
    },
    {
      id: 2,
      name: "Docker - Guía práctica de uso para desarrolladores",
      href: "#",
      imageSrc:
        "https://d1.awsstatic.com/acs/characters/Logos/Docker-Logo_Horizontel_279x131.b8a5c41e56b77706656d61080f6a0217a3ba356d.png",
      imageAlt: "Logo Doceker",
      color:
        "Aquí aprenderás Docker y para qué te puede servir, aprende a utilizar y crear imágenes, controlar el versionamiento y construcción automática de las mismas.",
    },
    {
      id: 3,
      name: "React: De cero a experto ( Hooks y MERN )",
      href: "#",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
      imageAlt: "Logo React",
      color:
        "El objetivo principal es simple, mejorar tus habilidades existentes de React. No es un curso para personas que quieran empezar con esta librería. El curso está dirigido a personas que ya tengan conocimientos de React con Hooks.",
    },
    {
      id: 4,
      name: "JavaScript Moderno: Guía para dominar el lenguaje",
      href: "#",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
      imageAlt: "Logo JavaScript",
      color:
        "El objetivo principal del curso es enseñarte JavaScript actual, empezando de cero conocimiento en JavaScript hasta llevarte a un nivel avanzado y competitivo en el mercado laboral actual.",
    },
  ];

  let navbarContains =[
    { name: "Todos los Cursos ", href: "#", current: false },
    { name: "Programas de Estudio ", href: "#", current: false },
    { name: "CampusLands", href: "https://campuslands.com/", current: false },
    { name: "Talento", href: "#", current: false },
  ]

  return (
    <>
      <Navbar navigation={navbarContains}/>
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
