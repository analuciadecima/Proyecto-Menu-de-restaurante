import Product from '../models/product.js';

// Obtener todos los productos
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los productos' });
    }
};

// Crear un nuevo producto
export const addProduct = async (req, res) => {
    const { name, description, price, category, isAvailable } = req.body;

    try {
        const newProduct = new Product({ name, description, price, category, isAvailable });
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: 'Error al agregar el producto' });
    }
};
