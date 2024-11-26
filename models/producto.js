import mongoose, { Schema, model } from 'mongoose';

const ProductoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es obigatorio"],
        unique:true,
    },
    estado: {
        type: Boolean,
        default: true,
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        required: true,
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: "Categoria",
        required: true,
    },
    precio: {
        type: Number,
        default: 0,
    },
    disponible:{
        type:Boolean,
        default: true,
    },
    img: {
        type:String,
        default: "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg",
    },
    stock:{
        type:Number,
        default: 0,
    }
    
});

// const Product = mongoose.model('Product', productSchema);

export default model("Producto", ProductoSchema) 