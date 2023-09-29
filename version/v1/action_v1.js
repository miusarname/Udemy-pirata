import { con } from "../../config/atlas.js";
import { ObjectId } from "mongodb";
import { validationResult } from "express-validator";

export async function Obtenervideos(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const db = await con();
    const user = await db.collection("cursos").find().toArray();

    if (user) {
      res.status(200).json({ message: "success", user });
      return { message: "success", user };
    } else {
      res.status(404).json({ message: "user not found" });
      return { message: "user not found" };
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("error");
    return { message: "error", error };
  }
}
