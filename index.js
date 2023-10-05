import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import morgan from "morgan";
import passport from "./config/passposrt.js";
import { UsersRoute } from "./routes/user.routes.js";
import { PageRoute } from "./routes/page.routes.js";
import { limitGrt } from "./config/limiter.js";
import cors from "cors";
import { decrypt } from "./version/extra/extras_actions.js";
import { crearToken } from "./config/JWT.js";

// Environment variables
dotenv.config();

// Initialize server
const index = express();

// Setting
index.set("port", process.env.PORT || 3000);

// Middlewares
index.use(morgan("dev"));
index.use(limitGrt())
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

// Essential Routes
index.use("/token", crearToken);
index.post("/encript", decrypt);
index.get("/return", (req, res) => {
  res.redirect("http://192.168.129.72:5174");
});

//Page Routes
index.use("/", PageRoute);

//User Routes
index.use("/", UsersRoute);

// Server
index.listen(index.get("port"), () => {
  console.log("Server on port " + index.get("port"));
});
