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

export async function CrearCurso(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const db = await con();
    const curso = req.body; // Los datos del nuevo curso deben pasarse en el cuerpo de la solicitud

    const result = await db.collection("cursos").insertOne(curso);

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

export async function ActualizarCurso(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const cursoId = req.params.id; // Debes proporcionar el ID del curso a actualizar
  const nuevoCurso = req.body; // Los nuevos datos del curso deben pasarse en el cuerpo de la solicitud

  try {
    const db = await con();
    const result = await db
      .collection("cursos")
      .updateOne({ _id: ObjectId(cursoId) }, { $set: nuevoCurso });

    if (result.modifiedCount === 1) {
      res.status(200).json({ message: "Curso actualizado exitosamente" });
    } else {
      res.status(404).json({ message: "Curso no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
}
export async function EliminarCurso(req, res) {
  const cursoId = req.params.id; // Debes proporcionar el ID del curso a eliminar

  try {
    const db = await con();
    const result = await db
      .collection("cursos")
      .deleteOne({ _id: ObjectId(cursoId) });

    if (result.deletedCount === 1) {
      res.status(200).json({ message: "Curso eliminado exitosamente" });
    } else {
      res.status(404).json({ message: "Curso no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
}
export async function CrearUsuario(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const db = await con();
    const usuario = req.body; // Los datos del nuevo usuario deben pasarse en el cuerpo de la solicitud

    const result = await db.collection("usuarios").insertOne(usuario);

    if (result.insertedCount === 1) {
      res
        .status(201)
        .json({
          message: "Usuario creado exitosamente",
          usuario: result.ops[0],
        });
    } else {
      res.status(500).json({ message: "No se pudo crear el usuario" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
}

export async function ObtenerUsuarios(req, res) {
  try {
    const db = await con();
    const usuarios = await db.collection("usuarios").find().toArray();

    res.status(200).json({ message: "Éxito", usuarios });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
}

export async function ActualizarUsuario(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const usuarioId = req.params.id; // Debes proporcionar el ID del usuario a actualizar
  const nuevoUsuario = req.body; // Los nuevos datos del usuario deben pasarse en el cuerpo de la solicitud

  try {
    const db = await con();
    const result = await db
      .collection("usuarios")
      .updateOne({ _id: ObjectId(usuarioId) }, { $set: nuevoUsuario });

    if (result.modifiedCount === 1) {
      res.status(200).json({ message: "Usuario actualizado exitosamente" });
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
}

export async function EliminarUsuario(req, res) {
  const usuarioId = req.params.id; // Debes proporcionar el ID del usuario a eliminar

  try {
    const db = await con();
    const result = await db
      .collection("usuarios")
      .deleteOne({ _id: ObjectId(usuarioId) });

    if (result.deletedCount === 1) {
      res.status(200).json({ message: "Usuario eliminado exitosamente" });
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
}
export async function CrearEstudiante(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const db = await con();
    const estudiante = req.body; // Los datos del nuevo estudiante deben pasarse en el cuerpo de la solicitud

    const result = await db.collection("estudiantes").insertOne(estudiante);

    if (result.insertedCount === 1) {
      res
        .status(201)
        .json({
          message: "Estudiante creado exitosamente",
          estudiante: result.ops[0],
        });
    } else {
      res.status(500).json({ message: "No se pudo crear el estudiante" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
}
export async function ObtenerEstudiantes(req, res) {
  try {
    const db = await con();
    const estudiantes = await db.collection("estudiantes").find().toArray();

    res.status(200).json({ message: "Éxito", estudiantes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
}
export async function ActualizarEstudiante(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const estudianteId = req.params.id; // Debes proporcionar el ID del estudiante a actualizar
  const nuevoEstudiante = req.body; // Los nuevos datos del estudiante deben pasarse en el cuerpo de la solicitud

  try {
    const db = await con();
    const result = await db
      .collection("estudiantes")
      .updateOne({ _id: ObjectId(estudianteId) }, { $set: nuevoEstudiante });

    if (result.modifiedCount === 1) {
      res.status(200).json({ message: "Estudiante actualizado exitosamente" });
    } else {
      res.status(404).json({ message: "Estudiante no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
}
export async function EliminarEstudiante(req, res) {
  const estudianteId = req.params.id; // Debes proporcionar el ID del estudiante a eliminar

  try {
    const db = await con();
    const result = await db
      .collection("estudiantes")
      .deleteOne({ _id: ObjectId(estudianteId) });

    if (result.deletedCount === 1) {
      res.status(200).json({ message: "Estudiante eliminado exitosamente" });
    } else {
      res.status(404).json({ message: "Estudiante no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
}
