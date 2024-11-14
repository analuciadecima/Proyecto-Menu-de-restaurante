import express from 'express';
import { getProducts, addProduct } from '../controllers/productController.js';

const router = express.Router();

router.get('/', getProducts);       // Ruta para obtener todos los productos
router.post('/', addProduct);        // Ruta para agregar un nuevo producto

export default router;
