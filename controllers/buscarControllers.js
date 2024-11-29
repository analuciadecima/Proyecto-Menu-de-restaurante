import {response, request} from "express";
import mongoose from "mongoose";

const {ObjectId}=mongoose.Types

import Categoria from "../models/categoria.js"
import Producto from "../models/producto.js"

const coleccionesAdmitidas=["categorias", "productos"]

const buscarCategoria=async(termino, res=response)=>{
    const isMongoId=ObjectId.isValid(termino)

    if (isMongoId){
        const categoria=await Categoria.findById(termino).populate("usuario", "nombre")
        return res.json({
            results: categoria ? [categoria] : [],
        })
    }

const regex= new RegExp (termino, "i")

const categorias = await Categoria.find({
nombre:regex, 
estado:true}).populate("usuario", "nombre");
res.json({
    results: categorias,
})

}

const buscarProducto=async(termino, res=response)=> {
    const isMongoId=ObjectId.isValid(termino)

    if (isMongoId){
        const producto=await Producto.findById(termino).populate("usuario", "nombre").populate("categoria", "nombre");

        return res.json({
            results: producto ? [producto] : [],
        })
    }


    const regex= new RegExp (termino, "i")

const productos = await Producto.find({
nombre:regex, 
estado:true}).populate("usuario", "nombre").populate("categoria", "nombre");
res.json({
    results: productos, 
})

}

    
    const buscar=async(req, res)=>{
const {coleccion, termino}=req.params
console.log ("ruta detectada:" , req.params)

if(!coleccionesAdmitidas.includes(coleccion)){
    return res.status(400).json ({
        msg: "Las colecciones permitidas son `${coleccionesAdmitidas}`"
    });
}

switch (coleccion){
case "categorias":
    buscarCategoria(termino,res)

break;
case "productos":
    buscarProducto(termino, res)

break;

default:
    res.status(500).json({
        msg: "No se generaron las busquedas"
    });
    break

}


}


export default buscar