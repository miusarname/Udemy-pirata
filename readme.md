# aña ensenanza
## 1.Estructura del Proyecto:

Escogimos una forma muy personal de hacer la estructura de carpetas del proyecto, a continuación se las enseñamos:

```
|-- database/
|   |-- queries.mongodb
|   |-- schemas/
|       |-- schemas.mongodb
|-- img/
|   |-- DIAGRAMA_DB.png
|-- client/
|   |-- index.html
|   |-- package.json
|   |-- postcss.config.js
|   |-- tailwind.config.js
|   |-- vite.config.js
|   |-- .gitignore
|   |-- .eslintrc.cjs
|   |-- src/
|       |-- main.jsx
|       |-- app.jsx
|       |-- index.css
|       |-- index.css
|       |-- assets/
|           |-- react.svg
|       |-- global/
|           |-- accordion.jsx
|           |-- allCourses.jsx
|           |-- CTA.jsx
|           |-- footer.jsx
|           |-- Hero.jsx
|           |-- Navbar.jsx
|       |-- home/
|           |-- home.jsx
|           |-- components/
|               |-- allCourses.jsx
|       |-- log/
|           |-- login.jsx
|           |-- components/
|               |-- sesión.jsx
|               |-- sesion.jsx
|       |-- pages/
|           |-- programas_de_estudio.jsx
|       |-- profile/
|           |-- profile.jsx
|           |-- components/
|               |-- information.jsx
|       |-- styles/
|           |-- image.css
|       |-- video/
|           |-- Player.jsx
|           |-- components/
|               |-- list.jsx
|               |-- play.jsx

|   |-- public/
|       |-- discord-logo-white.svg
|       |-- vite.svg
|-- config/
|   |-- atlas.js
|   |-- JWT.js
|   |-- limiter.js
|   |-- passposrt.js
|-- routes/
|   |-- page.routes.js
|   |-- user.routes.js
|-- versions/
|   |-- extra/
|   |   |-- extras_actions.js
|   |-- pageA/
|   |   |-- pageActions.js
|   |-- v1/
|   |   |-- action_v1.js
|   |-- v2/
|       |-- action_v2.js
|-- README.md
|-- package.json
|-- .gitignore
|-- index.js
|-- .env
```

## 2.Requisitos:

Los requisitos para la ejecución de la API rappi_campus son los siguientes:

* Node.js bajo la versión (v18.16.1), esta la puedes instalar desde ([https://nodejs.org/en/download](https://nodejs.org/en/download)).
* MongoDB Atlas con tu cuenta previamente creada en ([https://www.mongodb.com/es/atlas/database](https://www.mongodb.com/es/atlas/database)), en este caso utilizaremos la conexión a nuestra base de datos personal para realizar las pruebas (ya está configurado en las variables de entorno) pero dejamos un archivo de ejemplo .env.example.

## 3.Instalación:

* Clonamos el repositorio en la carpeta que se desee, para hacerlo mas sencillo puedes entrar a la carpeta donde quieras alojar el proyecto y ahí abres la terminal directamente y ejecutas el siguiente comando:

  ```bash
  git clone https://github.com/miusarname/Udemy-pirata.git
  ```
* Si quieres hacerlo aún mas sencillo puedes utilizar la extensión "Git Graph" y directamente clonas el repositorio después que tengas las credenciales sincronizadas con tu Github, clicando en el apartado clonar repositorio y pegas lo siguiente `https://github.com/miusarname/Udemy-pirata.git` y procedes a ubicar el repositorio donde mas desees.
* Luego de esto abriremos la terminal clicando en la parte superior del Visual Studio Code en el apartado "Terminal" y luego "New Terminal", ahí ejecutaremos el comando `npm update` o `npm install`descargar todas las dependencias previamente establecidas en el archivo "package.json".
* Por ultimo iniciaremos el servidor con el comando en terminal `npm run dev`, esto inicializará nuestro servidor, acto seguido, entramos a la carpeta client y volvemos a hacer los ultimos dos pasos 

  **NOTA IMPORTANTE: **Recuerda que el archivo de ejemplo ".env.example" deberás renombrarlo borrando el ".example" y quedará ".env" para que la dependencia "dotenv" pueda acceder a las variables de entorno, recomendamos realizar todas estas pruebas conectadas a nuestro servidor para evitar conflictos y si deseas cambiar el puerto recuerda que en la consola obtendrás la nueva ruta para que procedas a copiarla e ingresarla en el "Thunder Client".

## 4.Uso(Backend):

A continuación observaremos cuales son todas la consultas disponibles en este proyecto:

### 4.1 Consultas de "page":

#### 4.1.1 Consultar " list-all-courses ":

* **Endpoint** : `/list-all-courses`
* **Método HTTP** : GET
* **Descripción** : Consulta de todos los cursos.
* **Ejecución:**  :Iremos a nuestra extensión "Thunder Client", clicaremos en "New Request" y procedemos a ingresar la siguiente data donde dice `https://www.thunderclient.com/welcome` borraremos esa dirección y agregaremos la siguiente dirección, luego de eso deberás agregar en los "Headers" en el apartado vacío "header" la frase "Accept-Version" y poner en value "1.0.0", esta es la versión a la que vamos a acceder para el Registro.
* Ejemplo del contenido correspondiente en la ruta:

```bash
http://localhost:3000/list-all-courses
```

* Ejemplo del contenido correspondiente en body:

```json
{
  "message": "success",
  "user": [
    {
      "_id": "651e103982c69132c680a66a",
      "name": "Node.Js: De cero a experto",
      "description": "El objetivo principal del curso es enseñarte JavaScript actual, empezando de cero conocimiento en JavaScript hasta llevarte a un nivel avanzado y competitivo en el mercado laboral actual.",
      "href": "#",
      "imageSrc": "https://midu.dev/images/tags/node.png",
      "imageAlt": "Logo Node",
      "videoLinks": [
        [
          "Node.Js: De cero a experto",
          [
            {
              "name": "video1",
              "href": "d7e174b7b11b25f0396cfe0ba9ce3ce3",
              "Desc": "primer holamundo con js"
            }
          ]
        ]
      ]
    },
    {
      "_id": "651e103982c69132c680a66b",
      "name": "React",
      "description": "El objetivo principal del curso es enseñarte JavaScript actual, empezando de cero conocimiento en JavaScript hasta llevarte a un nivel avanzado y competitivo en el mercado laboral actual.",
      "href": "http://localhost:5173/video?curso=React",
      "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
      "imageAlt": "Logo react",
      "videoLinks": [
        [
          "React: De cero a experto ( Hooks y MERN )",
          [
            {
              "name": "Introducción al curso",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4a0438f64ce8a8fd72da9ea1279f08c53f8080f4b5cac67f46bb3a31095f222a3707ddd19480c921bd54cd15e256ffbc44d6ba5820d8357ac6a3751891502f533e",
              "Desc": "Aprende los conceptos fundamentales de React."
            },
            {
              "name": "¿Cómo funcionará el curso?",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4a0438f64ce8a8fd72da9ea1279f08c53f8080f4b5cac67f46bb3a31095f222a374153e42c72068c8f46f72d50a8184bba4e6f919a83dda32234903f5a4d47b9537e9659e72d77fcfbf4aac3133882dd36",
              "Desc": "Descubre cómo se organiza el curso y qué aprenderás."
            },
            {
              "name": "¿Cómo hacer preguntas?",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4a0438f64ce8a8fd72da9ea1279f08c53f8080f4b5cac67f46bb3a31095f222a37b4e61f9cedfb49f7926d6d35993d90e17fc26011241ff511427026d1e236e10d691968139f2ccef93cafaea7f5c3fb1f",
              "Desc": "Aprende cómo obtener ayuda y hacer preguntas durante el curso."
            },
            {
              "name": "Instalaciones necesarias y recomendadas",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4a0438f64ce8a8fd72da9ea1279f08c53f8080f4b5cac67f46bb3a31095f222a37ac844ba1b065109c0fd7a7a9c84bb1f8002c6d3626a235e1019deab0fd519b9a631cabf5522307abade259464d39f51dda6997a0f34113699ab47d23bc30870e",
              "Desc": "Descubre las herramientas que necesitas para seguir el curso."
            },
            {
              "name": "Introducción a la sección",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4a0438f64ce8a8fd72da9ea1279f08c53f64fbbe5aac33099ac0a1474597b6ba3f8193585bd5e5b505bb9d3bf4d80b712b02d4a5e958f2fcfc83db03e1f1981998",
              "Desc": "Descubre lo que aprenderás en esta sección del curso."
            },
            {
              "name": "¿Qué es React?",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4a0438f64ce8a8fd72da9ea1279f08c53f64fbbe5aac33099ac0a1474597b6ba3f55f39a0416bd957993759d77ac3c821569e02329a70a1069fad8459a71f9ebd0",
              "Desc": "Aprende los conceptos básicos de React y su importancia."
            },
            {
              "name": "Introducción a Babel",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4a0438f64ce8a8fd72da9ea1279f08c53f64fbbe5aac33099ac0a1474597b6ba3f8e8203a22c2f22af011c3d97f39e1e9b68677d12227907f0b7d5017b6848106f6fa484bd79bc8dd4075ae4b2a000ec1d",
              "Desc": "Explora la herramienta Babel y cómo se relaciona con React."
            },
            {
              "name": "Introducción a la sección",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4a0438f64ce8a8fd72da9ea1279f08c53f6ec1cebebf0853d4d8d8d1749ec173ded58098cf140a2f5a25008d9850ec32f1c79d1d4e6ddd94c54036fdfd7122c2aa",
              "Desc": "Comienza explorando los fundamentos de la sección."
            },
            {
              "name": "Inicio de proyecto - Bases de JavaScript",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4a0438f64ce8a8fd72da9ea1279f08c53f6ec1cebebf0853d4d8d8d1749ec173de4117b1e5e61a4e1de078d776ee2448ca7bbce1751fdbdd953405877841dfba73f291799012bb5905b59e39b8c375dfbb61e4e4d2d27606a2f0d1d40d19897c1a",
              "Desc": "Comienza tu proyecto aprendiendo las bases de JavaScript."
            },
            {
              "name": "Variables y constantes",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4a0438f64ce8a8fd72da9ea1279f08c53f6ec1cebebf0853d4d8d8d1749ec173de1d3dce16a863fa2092899855d95bb0d23d73a7852c2ecd281fbf41c9e1a026303f1db100be9b5c418a271e564eb05bef",
              "Desc": "Aprende sobre variables y constantes en JavaScript."
            },
            {
              "name": "Template String",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4a0438f64ce8a8fd72da9ea1279f08c53f6ec1cebebf0853d4d8d8d1749ec173dedbc973013ebfeb7b4cd6632b27018186b9fdb176838042ded5c03c8181b5aa17",
              "Desc": "Descubre cómo utilizar template strings en JavaScript para crear cadenas de texto más flexibles y legibles."
            },
            {
              "name": "Objetos lilterales",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4a0438f64ce8a8fd72da9ea1279f08c53f6ec1cebebf0853d4d8d8d1749ec173dee1dc5413d85ba0f646bb7433e6f258831ec93a2866e627876c62d53133d845006fed32ae43cf90444d3f8c7d21797df3",
              "Desc": "Explora el uso de objetos literales en JavaScript para organizar y manipular datos de manera efectiva."
            },
            {
              "name": "Arreglos",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4a0438f64ce8a8fd72da9ea1279f08c53f6ec1cebebf0853d4d8d8d1749ec173def3ae14ab0e61707a0fdc9bd96e547633b3d4bf59f8fdad87f3a4e9e9a35b5d43",
              "Desc": "Aprende a trabajar con arreglos en JavaScript para almacenar y manipular conjuntos de datos de manera eficiente."
            },
            {
              "name": "Desestructuación de Objetos",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4a0438f64ce8a8fd72da9ea1279f08c53f6ec1cebebf0853d4d8d8d1749ec173de0ed8c2e3b03efc7a77ad5bc96df142912bb2e99a244040391facebc290d6b4ac2946dfb60b309128644eb8da9ae33048",
              "Desc": "Domina la desestructuración de objetos en JavaScript para acceder y utilizar fácilmente sus propiedades."
            },
            {
              "name": "Desestructuación de Arreglos",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4a0438f64ce8a8fd72da9ea1279f08c53f6ec1cebebf0853d4d8d8d1749ec173ded87bb7eaa29721c4e21f31cd7f7cabc7df264a8fac69bf97b3fc6e72d0792dcbd3aaa2a6bd084177d46f46bdbd9a76dd",
              "Desc": "Aprende a realizar la desestructuración de arreglos en JavaScript para extraer y utilizar elementos específicos de manera efectiva."
            },
            {
              "name": "Import, export y funciones comunes de arreglos",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4a0438f64ce8a8fd72da9ea1279f08c53f6ec1cebebf0853d4d8d8d1749ec173de1fb447110318c078800996486a0d619ce6c5b7d88182b4acf77b7bcbf7a4ea2de945005bf737e3f8c3e16ecf1ae69fe7fe5bf4a4e99ff024d478f7166468c928",
              "Desc": "Explora cómo importar, exportar y utilizar funciones comunes de arreglos en JavaScript para trabajar con módulos y datos de manera más eficiente."
            },
            {
              "name": "Múltiples exportaciones y exportaciones por defecto",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4a0438f64ce8a8fd72da9ea1279f08c53f6ec1cebebf0853d4d8d8d1749ec173de7a26c5dcc366e69403e49b0b0140836c4496cdc3fcf519419fe9e3b752464cb4d31028cd09482b45e30debf2b2e4a8702683ed76be655e9782556f032b5f5f98aa6d2c40b23dd400db6e38594db9971d",
              "Desc": "Comprende cómo realizar múltiples exportaciones y exportaciones por defecto en JavaScript para organizar y compartir tu código de manera efectiva."
            },
            {
              "name": "Promesas",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4a0438f64ce8a8fd72da9ea1279f08c53f6ec1cebebf0853d4d8d8d1749ec173defed460b2a994eb897b1a11ec7d10aa3b216c9964e0c23735ec86c27b9a6a381d",
              "Desc": "Explora el concepto de promesas en JavaScript y cómo se utilizan para manejar operaciones asincrónicas de manera más ordenada y eficiente."
            },
            {
              "name": "Fetch API",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4a0438f64ce8a8fd72da9ea1279f08c53f6ec1cebebf0853d4d8d8d1749ec173deea66752eba288fe381415b69bb0d05d4187e9832c86e8d5ce8f3a7187fab418b",
              "Desc": "Aprende a utilizar la Fetch API en JavaScript para realizar solicitudes HTTP y trabajar con datos de servidores de manera efectiva."
            },
            {
              "name": "Async_-_Await",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4a0438f64ce8a8fd72da9ea1279f08c53f6ec1cebebf0853d4d8d8d1749ec173deee800ddb5feb08ef55d3044541d63fb1ef7f0104ca3070575044dbf909973b7f",
              "Desc": "Domina el uso de async/await en JavaScript para simplificar la gestión de operaciones asincrónicas y mejorar la legibilidad de tu código.."
            },
            {
              "name": "Operador condicional ternario",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4a0438f64ce8a8fd72da9ea1279f08c53f6ec1cebebf0853d4d8d8d1749ec173de77df0772de995e3f51a27456d2a786ddcb539260cd6754d6b98e1a56b349acff29d7a9135c1e52f21cf539624b5581b3",
              "Desc": "Aprende a utilizar el operador condicional ternario en JavaScript para tomar decisiones basadas en condiciones de manera concisa."
            },
            {
              "name": "¿Qué son los componentes?",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4a0438f64ce8a8fd72da9ea1279f08c53f87fd3c4e3099298bfbed8a7db2781193f7fed4157b01936a48a2ecab10e957718a7b8471b50e0e4dd458c6e08e5e4b79d4f0f513115b156c4fa7596d94aa4001",
              "Desc": "Los componentes son elementos esenciales en el desarrollo de aplicaciones web y de software. Estos módulos permiten dividir la interfaz y la lógica de una aplicación en partes más pequeñas y reutilizables, lo que facilita la construcción y el mantenimiento del código."
            },
            {
              "name": "Primera aplicación de React",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4a0438f64ce8a8fd72da9ea1279f08c53f87fd3c4e3099298bfbed8a7db2781193d868abbd23e841aacc92acf9b4de46e98ce8850ad62b7a207940b0dac6986c96f1934e0eecb11c2cfdc287a6773a195e",
              "Desc": "Crea tu primera aplicación utilizando React."
            },
            {
              "name": "Estructura de directorios - CRA",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4a0438f64ce8a8fd72da9ea1279f08c53f87fd3c4e3099298bfbed8a7db278119311dc17bb9705cace08b857d4c236334b1dfd049188c6d8e11e6678582b405d1e70c71e5bc0e0c57c5092aa8605178323",
              "Desc": "Aprende sobre la estructura de directorios en Create React App."
            },
            {
              "name": "Estructura de directorios - Vite",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4a0438f64ce8a8fd72da9ea1279f08c53f87fd3c4e3099298bfbed8a7db27811938c822a5a095d59161d1b302dbc30c390f18c8d2a600f9012b23739da63e611a66983e30253933d293247adecac6be584",
              "Desc": "Explora la estructura de directorios en Vite para proyectos React."
            },
            {
              "name": "Hola Mundo en React",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4a0438f64ce8a8fd72da9ea1279f08c53f87fd3c4e3099298bfbed8a7db278119358d84f25bddc1ed52a2e6b43cf4716a3086027809142b49f8bd457c0f1f7703189713e500dc9c8ef31da02c20990033d",
              "Desc": "Desarrolla tu Hola Mundo en React para dar tus primeros pasos en esta biblioteca de JavaScript."
            },
            {
              "name": "Tarea - Crear un nuevo componente",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4a0438f64ce8a8fd72da9ea1279f08c53f87fd3c4e3099298bfbed8a7db2781193990d15046948e8078dbf481426781e602e2f428d3a95ea2931366ab709bd256e819f992d9035d9b9cd22ec0a3a23d789",
              "Desc": "Tu tarea es crear un nuevo componente en tu aplicación de React para agregar funcionalidad o contenido específico a tu proyecto."
            }
          ]
        ]
      ]
    },
    {
      "_id": "651e103982c69132c680a66c",
      "name": "Docker",
      "description": "El objetivo principal del curso es enseñarte JavaScript actual, empezando de cero conocimiento en JavaScript hasta llevarte a un nivel avanzado y competitivo en el mercado laboral actual.",
      "href": "http://localhost:5173/video?curso=Docker",
      "imageSrc": "https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/ywjqppks5ffcnbfjuttq",
      "imageAlt": "Logo Docker",
      "videoLinks": [
        [
          "Docker - Guía práctica de uso para desarrolladores",
          [
            {
              "name": "Introducción al curso",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4ac1991c8bc285df3b701d897711e387b4777b5ee0289f43c937686375a2b409a4be666c93f6900ed33dc170d1702e68fcd0b0c78fd3948ea9b2e203fffddfb8ba7837f9ce423e2d2dddd77044c4250042",
              "Desc": "Aprende los conceptos fundamentales de React."
            },
            {
              "name": "¿Cómo funcionará el curso?",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4ac1991c8bc285df3b701d897711e387b4777b5ee0289f43c937686375a2b409a487706f52b13f8fc406e9df4797a61e769bf0b9eab67b0ccc4490d532aa28385a5a906fad86f34c7365fe679e02b2de04",
              "Desc": "Descubre cómo se organiza el curso y qué aprenderás."
            },
            {
              "name": "¿Cómo hacer preguntas?",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4ac1991c8bc285df3b701d897711e387b4777b5ee0289f43c937686375a2b409a47264a16a04130f21fc10f6c6551173bc1a81f053c1e49c6c4df025e886c465fb58b57cd842e5a55c95db8f1ea6142fa0",
              "Desc": "Aprende cómo obtener ayuda y hacer preguntas durante el curso."
            },
            {
              "name": "Instalaciones necesarias y recomendadas",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4ac1991c8bc285df3b701d897711e387b4777b5ee0289f43c937686375a2b409a476a790985fe076a698994a420ef0b9314e8ca6ee8e21e257b0bda1056180d892bd4f870edbab8040def00a784f3eacc1",
              "Desc": "Aprende cómo obtener ayuda y hacer preguntas durante el curso."
            },
            {
              "name": "Instalación Docker - Linux Ubuntu",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4ac1991c8bc285df3b701d897711e387b4777b5ee0289f43c937686375a2b409a4225b1ec2e46a17cdce9e8a12fe2eea5574d6206b7fa10bc108b901b54a885fd50a77187bec9adb34136c5de069f1ceba14d9ed3e38576dbbf255ee8920fafc54",
              "Desc": "Aprende cómo obtener ayuda y hacer preguntas durante el curso."
            },
            {
              "name": "Instalación Docker - Linux manual",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4ac1991c8bc285df3b701d897711e387b4777b5ee0289f43c937686375a2b409a4b4f7356d2b9f5b72521daee8b3dce239cd2caef52be2e21e7cc1f803a155afb846d1c7bc55fc88d6e34531cb95ab6c76d2b90e13f8a1bc0a5c4b284b175a3137",
              "Desc": "Aprende cómo obtener ayuda y hacer preguntas durante el curso."
            },
            {
              "name": "Guía de atajos para el curso",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4ac1991c8bc285df3b701d897711e387b4777b5ee0289f43c937686375a2b409a4af2e59e969c5913d9f0368e9ce94a0b1577ba7c75e1409212ff27204d25cf2b0408267d2e22217073e9a56436a0f6b8e",
              "Desc": "Aprende cómo obtener ayuda y hacer preguntas durante el curso."
            },
            {
              "name": "Introducción a la sección",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4ac1991c8bc285df3b701d897711e387b4459ed1c3336b7dde2d044a1f57bef3557879a724cb40d678debb3a6398b7ccc634ffccd658e5563fb96dfed5632688be625ed15f1a7374a101974655fc123502",
              "Desc": "Aprende cómo obtener ayuda y hacer preguntas durante el curso."
            },
            {
              "name": "Hola Mundo en Docker",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4ac1991c8bc285df3b701d897711e387b4459ed1c3336b7dde2d044a1f57bef3552a8680af1b72274028673fbb7dc8ff95f9ae7bd4fcd820f81130177e771ca157dbf79ae6cb70413cbac26af7212a8735",
              "Desc": "Aprende cómo obtener ayuda y hacer preguntas durante el curso."
            },
            {
              "name": "Borrar contenedores e imágenes",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4ac1991c8bc285df3b701d897711e387b4459ed1c3336b7dde2d044a1f57bef35505b6f0373b4b493964c7b1b66b2f36b687dd0f042252887b0b37f55e5db5b63dd6a85d2c3b50f669ec279c92264db7ee",
              "Desc": "Aprende cómo obtener ayuda y hacer preguntas durante el curso."
            },
            {
              "name": "Docker Desktop - Mismos comandos ejecutados",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4ac1991c8bc285df3b701d897711e387b4459ed1c3336b7dde2d044a1f57bef35561872f9908f4831cd17817663bf77799727dec7744e236a903d42e9486013b23887c637546c1b3e0e34c899f5bc29679c532ade9f688133eabe4a157597d1ac3",
              "Desc": "Aprende cómo obtener ayuda y hacer preguntas durante el curso."
            },
            {
              "name": "Publish and Detached modes",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4ac1991c8bc285df3b701d897711e387b4459ed1c3336b7dde2d044a1f57bef3552e4e354ed0aa16cd78d3041793baa791c5198563a6ae8f17df87af2847550cd355c96981ef2d16cd4795e2ee5f9fec5b",
              "Desc": "Aprende cómo obtener ayuda y hacer preguntas durante el curso."
            },
            {
              "name": "Variables de entorno",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4ac1991c8bc285df3b701d897711e387b4459ed1c3336b7dde2d044a1f57bef35598b7cd7ec657725f439932e2869c3a509892727ba4c84b99a1273c9840e9739b30b442fc5402e4d032afa3c001315f7e",
              "Desc": "Aprende cómo obtener ayuda y hacer preguntas durante el curso."
            },
            {
              "name": "Usar la imagen de Postgres",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4ac1991c8bc285df3b701d897711e387b4459ed1c3336b7dde2d044a1f57bef355d8ac7f30892115d9982d9040f9ee2dea788149ddfe2c192b00f8a6102cfb869edf44470bb5e6a2ffee90c28cdb5611a0",
              "Desc": "Aprende cómo obtener ayuda y hacer preguntas durante el curso."
            },
            {
              "name": "Multiples instancias de Postgres",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4ac1991c8bc285df3b701d897711e387b4459ed1c3336b7dde2d044a1f57bef35543b61f2d342e96f2f9d3bc9dcb7639127c93a316f34c9375ab324c8f8a1daf9caf8131cd161aeb3bbe9a2ad52981dfb70bbc8b2185e24a7dee260486ebefef77",
              "Desc": "Aprende cómo obtener ayuda y hacer preguntas durante el curso."
            },
            {
              "name": "Logs del contenedor",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4ac1991c8bc285df3b701d897711e387b4459ed1c3336b7dde2d044a1f57bef355177f8d7182425b5e9f53ba2d0ec282680768a5edb1656020b9f70815a497d9636593fb945b05d1f3a8c31bf34c4003c2",
              "Desc": "Aprende cómo obtener ayuda y hacer preguntas durante el curso."
            }
          ]
        ]
      ]
    }
  ]
}
```

* Clicaremos en Send y obtendremos una respuesta similar a esta, ejemplo de respuesta del servidor:

```
success
```

Listo, ahora has traido todos los cursos que hay disponibles

#### 4.1.2 Consultar "comments":

* **Endpoint** : `/comments`
* **Método HTTP** : GET
* **Descripción** : Se obtiene los comentario por video.
* **Ejecución:** Para su ejecución debemos ingresar `/comments?video=<linkDelVideo>`, reemplazaremos  `<linkDelVideo>` por el link del video(ENCRIPTADO) que deseamos traer los comentarios, entonces iremos a nuestra extensión "Thunder Client", clicaremos en "New Request" y procedemos a ingresar la siguiente data donde dice `https://www.thunderclient.com/welcome` borraremos esa dirección, luego de eso deberás agregar en los "Headers" en el apartado vacío "header" la frase "Accept-Version" y poner en value "1.0.0", esta es la versión a la que vamos a acceder para el Registro.
* Ejemplo del contenido correspondiente en la ruta:

```bash
http://localhost:3000/comments?video=29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4ac1991c8bc285df3b701d897711e387b4777b5ee0289f43c937686375a2b409a4be666c93f6900ed33dc170d1702e68fcd0b0c78fd3948ea9b2e203fffddfb8ba7837f9ce423e2d2dddd77044c4250042
```

* Ejemplo del contenido correspondiente en body:

```json
{
  "message": "success",
  "res": [
    {
      "_id": "651e2028e0b3e2a41f4a287e",
      "content": "aDADASDASDASD",
      "author": "Anderson David Céspedes Alcala",
      "videoId": "http://192.168.128.23:5010/cursos/play?course=docker&seccion=1&video=docker-1-01-introduccion_al_curso"
    }
  ]
}
```

* Clicaremos en Send y obtendremos una respuesta similar a esta, ejemplo de respuesta del servidor:

```
success
```

Listo, ahora has obtenido los comentarios de un video, continuemos con la guía.

### 4.2 Consultas de "user":

#### 4.1.1 Consultar "cursos":

* **Endpoint** : `/cursos`
* **Método HTTP** : GET
* **Descripción** : Obtener los videos por curso.
* **Ejecución:** Para su ejecución debemos ingresar `/cursos?course=<name_Corse>`, reemplazaremos  `<name_Corse>` por el link del video(ENCRIPTADO) que deseamos traer los comentarios, entonces iremos a nuestra extensión "Thunder Client", clicaremos en "New Request" y procedemos a ingresar la siguiente data donde dice `https://www.thunderclient.com/welcome` borraremos esa dirección, luego de eso deberás agregar en los "Headers" en el apartado vacío "header" la frase "Accept-Version" y poner en value "1.0.0", esta es la versión a la que vamos a acceder para el Registro.
* Ejemplo del contenido correspondiente en la ruta:

```bash
http://localhost:3000/cursos?course=Docker
```

* Ejemplo del contenido correspondiente en body:

```json
{
  "message": "success",
  "user": [
    {
      "_id": "651e103982c69132c680a66c",
      "name": "Docker",
      "description": "El objetivo principal del curso es enseñarte JavaScript actual, empezando de cero conocimiento en JavaScript hasta llevarte a un nivel avanzado y competitivo en el mercado laboral actual.",
      "href": "http://localhost:5173/video?curso=Docker",
      "imageSrc": "https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/ywjqppks5ffcnbfjuttq",
      "imageAlt": "Logo Docker",
      "videoLinks": [
        [
          "Docker - Guía práctica de uso para desarrolladores",
          [
            {
              "name": "Introducción al curso",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4ac1991c8bc285df3b701d897711e387b4777b5ee0289f43c937686375a2b409a4be666c93f6900ed33dc170d1702e68fcd0b0c78fd3948ea9b2e203fffddfb8ba7837f9ce423e2d2dddd77044c4250042",
              "Desc": "Aprende los conceptos fundamentales de React."
            },
            {
              "name": "¿Cómo funcionará el curso?",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4ac1991c8bc285df3b701d897711e387b4777b5ee0289f43c937686375a2b409a487706f52b13f8fc406e9df4797a61e769bf0b9eab67b0ccc4490d532aa28385a5a906fad86f34c7365fe679e02b2de04",
              "Desc": "Descubre cómo se organiza el curso y qué aprenderás."
            },
            {
              "name": "¿Cómo hacer preguntas?",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4ac1991c8bc285df3b701d897711e387b4777b5ee0289f43c937686375a2b409a47264a16a04130f21fc10f6c6551173bc1a81f053c1e49c6c4df025e886c465fb58b57cd842e5a55c95db8f1ea6142fa0",
              "Desc": "Aprende cómo obtener ayuda y hacer preguntas durante el curso."
            },
            {
              "name": "Instalaciones necesarias y recomendadas",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4ac1991c8bc285df3b701d897711e387b4777b5ee0289f43c937686375a2b409a476a790985fe076a698994a420ef0b9314e8ca6ee8e21e257b0bda1056180d892bd4f870edbab8040def00a784f3eacc1",
              "Desc": "Aprende cómo obtener ayuda y hacer preguntas durante el curso."
            },
            {
              "name": "Instalación Docker - Linux Ubuntu",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4ac1991c8bc285df3b701d897711e387b4777b5ee0289f43c937686375a2b409a4225b1ec2e46a17cdce9e8a12fe2eea5574d6206b7fa10bc108b901b54a885fd50a77187bec9adb34136c5de069f1ceba14d9ed3e38576dbbf255ee8920fafc54",
              "Desc": "Aprende cómo obtener ayuda y hacer preguntas durante el curso."
            },
            {
              "name": "Instalación Docker - Linux manual",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4ac1991c8bc285df3b701d897711e387b4777b5ee0289f43c937686375a2b409a4b4f7356d2b9f5b72521daee8b3dce239cd2caef52be2e21e7cc1f803a155afb846d1c7bc55fc88d6e34531cb95ab6c76d2b90e13f8a1bc0a5c4b284b175a3137",
              "Desc": "Aprende cómo obtener ayuda y hacer preguntas durante el curso."
            },
            {
              "name": "Guía de atajos para el curso",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4ac1991c8bc285df3b701d897711e387b4777b5ee0289f43c937686375a2b409a4af2e59e969c5913d9f0368e9ce94a0b1577ba7c75e1409212ff27204d25cf2b0408267d2e22217073e9a56436a0f6b8e",
              "Desc": "Aprende cómo obtener ayuda y hacer preguntas durante el curso."
            },
            {
              "name": "Introducción a la sección",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4ac1991c8bc285df3b701d897711e387b4459ed1c3336b7dde2d044a1f57bef3557879a724cb40d678debb3a6398b7ccc634ffccd658e5563fb96dfed5632688be625ed15f1a7374a101974655fc123502",
              "Desc": "Aprende cómo obtener ayuda y hacer preguntas durante el curso."
            },
            {
              "name": "Hola Mundo en Docker",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4ac1991c8bc285df3b701d897711e387b4459ed1c3336b7dde2d044a1f57bef3552a8680af1b72274028673fbb7dc8ff95f9ae7bd4fcd820f81130177e771ca157dbf79ae6cb70413cbac26af7212a8735",
              "Desc": "Aprende cómo obtener ayuda y hacer preguntas durante el curso."
            },
            {
              "name": "Borrar contenedores e imágenes",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4ac1991c8bc285df3b701d897711e387b4459ed1c3336b7dde2d044a1f57bef35505b6f0373b4b493964c7b1b66b2f36b687dd0f042252887b0b37f55e5db5b63dd6a85d2c3b50f669ec279c92264db7ee",
              "Desc": "Aprende cómo obtener ayuda y hacer preguntas durante el curso."
            },
            {
              "name": "Docker Desktop - Mismos comandos ejecutados",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4ac1991c8bc285df3b701d897711e387b4459ed1c3336b7dde2d044a1f57bef35561872f9908f4831cd17817663bf77799727dec7744e236a903d42e9486013b23887c637546c1b3e0e34c899f5bc29679c532ade9f688133eabe4a157597d1ac3",
              "Desc": "Aprende cómo obtener ayuda y hacer preguntas durante el curso."
            },
            {
              "name": "Publish and Detached modes",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4ac1991c8bc285df3b701d897711e387b4459ed1c3336b7dde2d044a1f57bef3552e4e354ed0aa16cd78d3041793baa791c5198563a6ae8f17df87af2847550cd355c96981ef2d16cd4795e2ee5f9fec5b",
              "Desc": "Aprende cómo obtener ayuda y hacer preguntas durante el curso."
            },
            {
              "name": "Variables de entorno",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4ac1991c8bc285df3b701d897711e387b4459ed1c3336b7dde2d044a1f57bef35598b7cd7ec657725f439932e2869c3a509892727ba4c84b99a1273c9840e9739b30b442fc5402e4d032afa3c001315f7e",
              "Desc": "Aprende cómo obtener ayuda y hacer preguntas durante el curso."
            },
            {
              "name": "Usar la imagen de Postgres",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4ac1991c8bc285df3b701d897711e387b4459ed1c3336b7dde2d044a1f57bef355d8ac7f30892115d9982d9040f9ee2dea788149ddfe2c192b00f8a6102cfb869edf44470bb5e6a2ffee90c28cdb5611a0",
              "Desc": "Aprende cómo obtener ayuda y hacer preguntas durante el curso."
            },
            {
              "name": "Multiples instancias de Postgres",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4ac1991c8bc285df3b701d897711e387b4459ed1c3336b7dde2d044a1f57bef35543b61f2d342e96f2f9d3bc9dcb7639127c93a316f34c9375ab324c8f8a1daf9caf8131cd161aeb3bbe9a2ad52981dfb70bbc8b2185e24a7dee260486ebefef77",
              "Desc": "Aprende cómo obtener ayuda y hacer preguntas durante el curso."
            },
            {
              "name": "Logs del contenedor",
              "href": "29a8a023bc19ee6c65c7ff0c4943c9c57adf0f36357e58980e3455cebf61bf4ac1991c8bc285df3b701d897711e387b4459ed1c3336b7dde2d044a1f57bef355177f8d7182425b5e9f53ba2d0ec282680768a5edb1656020b9f70815a497d9636593fb945b05d1f3a8c31bf34c4003c2",
              "Desc": "Aprende cómo obtener ayuda y hacer preguntas durante el curso."
            }
          ]
        ]
      ]
    }
  ]
}
```


```
success
```

Listo, ahora has traido todos lo videos por curso, continuemos con la guía.


## 4.Uso(FrontEnd):

Para comenzar, vamos a abrir Discord e iniciar sesión. Una vez dentro, nos dirigimos a la sección '/home'. En este lugar, seremos recibidos con una cálida bienvenida y veremos una lista de cursos disponibles. Si desplazamos la página hacia abajo, encontraremos todos los cursos disponibles en esa sección.

Además, notarás una barra de navegación en la parte superior que te permitirá moverte a otras secciones, como '/allcourses'. Cuando seleccionemos un curso específico, comenzará siempre desde el primer video. En la parte superior de la página del curso, verás una cabecera que funciona como un acordeón. Esto significa que puedes desplegarla para buscar el video o capítulo que necesitas de manera rápida y sencilla.

Además, si sigues desplazándote hacia abajo en la página del curso, encontrarás una sección de comentarios donde puedes leer los comentarios de otros usuarios y dejar tus propios comentarios si lo deseas.






