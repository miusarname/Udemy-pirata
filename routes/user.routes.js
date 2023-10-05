import { Router } from "express";
import { ObtenervideosCurso } from "../version/v1/action_v1.js";
import { crearComentario } from "../version/pageA/pageActions.js";
import RoutesVersioning from "express-routes-versioning";

const version = RoutesVersioning();

export const UsersRoute = Router();

UsersRoute.get("/cursos", version({
    "2.0.0": ObtenervideosCurso,
  }),ObtenervideosCurso);
UsersRoute.post(
  "/create-comment",
  version({
    "2.0.0": crearComentario,
  })
);
