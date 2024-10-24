import express from "express"
import {menuController} from "../controllers/menuController.js"


const router=express.Router()

// Ruta para obtener todos los ítems del menú
router.get('/', getMenuItems);

// Ruta para agregar un nuevo ítem al menú
router.post('/', addMenuItem);

export default router;