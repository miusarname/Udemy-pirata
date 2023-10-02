import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import morgan from "morgan";
// import { session } from "passport";
import passport from './config/passposrt.js';
import routesVersioning from "express-routes-versioning";
import { limitGrt } from "./config/limiter.js";
import { Obtenervideos, ObtenervideosCurso } from "./version/v1/action_v1.js";
import {
  ObtenerComentariosVideo,
  crearComentario,
} from "./version/pageA/pageActions.js";
import cors from "cors";
import { decrypt } from "./version/extra/extras_actions.js";
import { crearToken, validarToken } from "./config/JWT.js";

// Environment variables
dotenv.config();

// Initialize server
const index = express();
const version = routesVersioning();

// Setting
index.set("port", process.env.PORT || 3000);

// Middlewares
index.use(morgan("dev"));
index.use(cors());
index.use(express.json());
index.use(
  session({
    secret: "log",
    resave: false,
    saveUninitialized: false,
  })
);
//index.use(limitGrt());
index.use(passport.initialize());
index.use(passport.session());

// Routes
index.use("/token", crearToken);

//Rutas para admin (permisos de acceso: admin)
index.get("/list-all-courses", Obtenervideos);
index.get("/cursos", ObtenervideosCurso);
index.post("/encript", decrypt);
index.post("/create-comment", crearComentario);
index.get("/comments", ObtenerComentariosVideo);
index.get("/login",passport.authenticate("discord",{failureRedirect:'/comments'}),(req,res) => {
  console.log(req.user.guilds[6])
  res.send('a')
});

// // Rutas para camper (permisos de acceso: camper)
// index.use(
//   "/camper",
//   validarToken,
//   version({
//     "2.0.0": campers,
//     fallbackVersion: "2.0.0"
//   })
// );

// // Rutas para trainer (permisos de acceso: trainer)
// index.use(
//   "/trainer",
//   validarToken,
//   version({
//     "1.0.0": Trainers,
//     fallbackVersion: "2.0.0"
//   })
// );

index.use("/", (req, res) => {
  res.send("a");
});
// Server
index.listen(index.get("port"), () => {
  console.log("Server on port " + index.get("port"));
});
