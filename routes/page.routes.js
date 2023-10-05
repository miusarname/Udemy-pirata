import { Router } from "express";
import { Obtenervideos } from "../version/v1/action_v1.js";
import passport from "../config/passposrt.js";
import { encrypt } from "../version/v1/action_v1.js";
import { ObtenerComentariosVideo } from "../version/pageA/pageActions.js";

import RoutesVersioning from "express-routes-versioning";

const version = RoutesVersioning();

export const PageRoute = Router();

PageRoute.get(
  "/list-all-courses",
  version({
    "1.0.0": Obtenervideos,
  })
);
PageRoute.get(
  "/comments",
  version({
    "1.0.0": ObtenerComentariosVideo,
  })
);
PageRoute.get(
  "/login",
  passport.authenticate("discord", { failureRedirect: "/return" }),
  (req, res) => {
    let creedentials = encrypt(JSON.stringify(req.user));
    res.redirect("http://localhost:5173/home?c=" + creedentials);
  }
);
