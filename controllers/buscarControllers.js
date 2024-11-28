import {response, request} from "express";
import mongoose from "mongoose";

const {ObjectId}=mongoose.Types

import Categoria from "../models/categoria.js"
import Producto from "../models/producto.js"
import routerBuscar from "../routes/buscar.js";

const coleccionesAdmitidas=["categorias", "productos"]

const buscarCategoria=async(termino, res)=>{
    const isMongoId=ObjectId.idValid(termino)

    if (isMongoId){
        const categoria=await Categoria.findById(termino).populate("usuario", "nombre")
        return res.json({
            results: categoria ? [categoria] : [],
        })
    }
}

const buscar=async(req, res)=>{
const {coleccion, termino}=req.params

if(!coleccionesAdmitidas.includes(coleccion)){
    return res.status(400).json ({
        msg: "Las colecciones permitidas son `${coleccionesPermitidaas}`"
    })

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
    })

}


}
}

export default buscar