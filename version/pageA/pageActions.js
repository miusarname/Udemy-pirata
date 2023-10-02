import { con } from "../../config/atlas.js";
import crypto from "crypto";
import { validationResult } from "express-validator";

export function decryptfunct(toDecrypt) {
  try {
    const secret = "tu_clave_secreta"; // Asegúrate de que esta clave sea la misma que se usó para cifrar.
    const decipher = crypto.createDecipher("aes-256-cbc", secret);
    let decrypted = decipher.update(toDecrypt, "hex", "utf8"); // Asegúrate de que los datos cifrados estén en formato hexadecimal.
    decrypted += decipher.final("utf8");
    console.log(decrypted);
    return decrypted;
  } catch (error) {
    return null;
  }
}

export async function crearComentario(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const db = await con();
    const curso = req.body; // Los datos del nuevo curso deben pasarse en el cuerpo de la solicitud

    const result = await db.collection("comentarios").insertOne(curso);

    if (result) {
      res
        .status(201)
        .json({
          curso: result,
          message: "success",
        });
    } else {
      res.status(500).json({ message: "No se pudo crear el curso" });
    }
    console.log(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
}

export async function ObtenerComentariosVideo(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  let video = decryptfunct(req.query.video);
  console.log(video,"link decripted");

  try {
    const db = await con();
    const user = await db
      .collection("comentarios")
      .find({ videoId: video })
      .toArray();

    if (user.length > 0) {
      res.status(200).json({ message: "success", res: user });
    } else {
      res.status(404).json({ message: "user not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("error");
  }
}
