import cloudinary from "../config/cloudinary.js";
import fs from "fs"

export const subirImagen = async (req, res) => {
  try {
    const archivo = req.files.imagen; 
    const resultado = await cloudinary.uploader.upload(archivo.Path, {
      folder: "productos", 
    });
   
    fs.unlinkSync(archivo.path);

    res.json({ url: resultado.secure_url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error al subir la imagen" });
  }
};
