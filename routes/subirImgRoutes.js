import express from "express";
import { subirImagen } from "../controllers/cloudinaryControllers.js";
import { upload } from "../config/multer.config.js";

const router = express.Router();

// Ruta para subir una imagen
router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const file = req.file.path; // Ruta temporal del archivo
    const result = await subirImagen(file); // Llama al controlador que gestiona Cloudinary

    res.json({ url: result.secure_url }); // Devuelve la URL segura de la imagen
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al subir la imagen" });
  }
});

export default router;

