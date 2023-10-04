import { Router } from "express";
import { ObtenervideosCurso } from "../version/v1/action_v1.js";
import { crearComentario } from "../version/pageA/pageActions.js";
import RoutesVersioning from "express-routes-versioning";

const version = RoutesVersioning();

export const UsersRoute = Router();

UsersRoute.get("/cursos", ObtenervideosCurso);
UsersRoute.post("/create-comment", crearComentario);
