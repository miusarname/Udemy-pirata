import { con } from "../../config/atlas.js";
import crypto from "crypto";
import { ObjectId } from "mongodb";
import { validationResult } from "express-validator";

export function encrypt(value) {
  const secret = "tu_clave_secreta"; // Reemplaza con tu clave secreta real
  const cipher = crypto.createCipher("aes-256-cbc", secret);
  let encrypted = cipher.update(value, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}

export async function Obtenervideos(req, res) {
  try {
    const db = await con();
    const user = await db.collection("cursos").find().toArray();

    if (user.length > 0) {
      // Itera sobre los resultados y encripta los valores de href
      user.forEach((course) => {
        course.videoLinks.forEach((videoLink) => {
          videoLink[1].forEach((video) => {
            const encryptedHref = encrypt(video.href);
            video.href = encryptedHref;
          });
        });
      });

      res.status(200).json({ message: "success", user });
    } else {
      res.status(404).json({ message: "user not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("error");
  }
}

export async function ObtenervideosCurso(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  let CourseName = req.query.course;

  try {
    const db = await con();
    const user = await db
      .collection("cursos")
      .find({ name: CourseName })
      .toArray();

    if (user.length > 0) {
      // Itera sobre los resultados y encripta los valores de href
      user.forEach((course) => {
        course.videoLinks.forEach((videoLink) => {
          videoLink[1].forEach((video) => {
            const encryptedHref = encrypt(video.href);
            video.href = encryptedHref;
          });
        });
      });

      res.status(200).json({ message: "success", user });
    } else {
      res.status(404).json({ message: "user not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("error");
  }
}
export async function CrearUsuaroEstudiante(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const db = await con();
    const curso = req.user; // Los datos del nuevo curso deben pasarse en el cuerpo de la solicitud
    const user = {
      name:  req.user.global_name,
      email: req.user.email,
      password:  req.user.id,
      userType:"administrador"
    };
    console.log(user,'aaaa');

    const result = await db.collection("estudiantes").insertOne(user);

    if (result.insertedCount === 1) {
      res
        .status(201)
        .json({ message: "Curso creado exitosamente", curso: result.ops[0] });
    } else {
      res.status(500).json({ message: "No se pudo crear el curso" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
}
