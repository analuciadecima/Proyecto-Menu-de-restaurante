import { request, response } from "express"
import Usuario from "../models/usuario.js"
import bcrypt from "bcryptjs"
// import {validationResult} from "express-validator"

const getAdmins = async (req, res)=>{
    try {
        const admins=await Usuario.find({rol:"ADMIN_ROLE", estado:true});
        const totalAdmins= await Usuario.countDocuments({rol: "ADMIN_ROLE", estado: true});

        res.status(200).json({total:totalAdmins, admins});
        
    }
    catch (error) {
        res.status(500).json({
            msg: "Error al obtener usuarios administradores"
        })
    }
}

const getUsers = async (req=request, res=response)=>{
    const {limite=5, desde=0}=req.query;
    const usuarios=await Usuario.find({estado:true}).limit(limite).skip(desde);
    const total=await Usuario.countDocuments()
    res.json({total, usuarios})
}
const getUser = async (req, res) => {
    const { id } = req.params;
  
    const usuario = await Usuario.findById(id);

    if (!usuario){
        return res.status(404).json({ msg: "No se encontró el usuario"})
    }
  
    res.json({
      usuario,
    });

  };


const postUsers = async (req, res)=>{

    const datos= req.body

    const {nombre, email, password, rol}= datos


    const usuario = new Usuario({nombre, email, password, rol})

    
const salt = bcrypt.genSaltSync()
usuario.password = bcrypt.hashSync(password, salt)


await usuario.save()
        res.status(201).json({msg: "Usuario creado con exito!", usuario})

}



const putUsers = async (req, res)=>{
    
 const {id}=req.params;

const {password,_id, email,...resto}=req.body;

const salt = bcrypt.genSaltSync()
resto.password = bcrypt.hashSync(password, salt)

const usuario = await Usuario.findByIdAndUpdate(id, resto, {new:true})

res.status(200).json({
    message: "Usuario actualizado", usuario
})
}

const deleteUsers = async (req, res)=>{
    const {id}=req.params;

    //borrar usuario definitivo
    // const usuarioBorrado = await Usuario.findByIdAndDelete(id)
    
    //inactivar usuario
    const usuarioInactivo = await Usuario.findByIdAndUpdate(id, {estado:false}, {new:true})


    res.json({message: "usuario eliminado"})
}



export{getAdmins,getUsers, getUser,  postUsers, putUsers, deleteUsers}