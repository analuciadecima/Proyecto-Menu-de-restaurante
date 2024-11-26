
import Categoria from "../models/categoria.js"

const traerCategorias= async(req, res)=>{
const categorias=await Categoria.find({estado:true})

    res.json({
        categorias,
    })
}

const agregarCategoria=async(req,res)=>{
   
const nombre = req.body.nombre.toUpperCase()

const categoriaEncontrada=await Categoria.findOne({nombre})
if(categoriaEncontrada){
    return res.status(401).json({msg: "La categoria ya existe"})
}

const usuario= req.usuario._id

const categoria = new Categoria({nombre,usuario})

categoria.save()
res.status(200).json({
    msg: "Categoria registrada", categoria
})

}

const actualizarCategoria=(req,res)=>{
    res.json({
        msg: "Put categorias",
    })

}


const borrarCategoria=(req,res)=>{
    res.json({
        msg: "Delete categorias",
    })
}


export {traerCategorias, agregarCategoria, actualizarCategoria, borrarCategoria}