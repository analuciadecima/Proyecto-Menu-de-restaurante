import { request, response } from "express"
import Usuario from "../models/usuario.js"
import bcrypt from "bcryptjs"
// import {validationResult} from "express-validator"



const getUsers = (req=request, res=response)=>{
    res.json({message: "peticion GET"})
}

const postUsers = async (req, res)=>{

    const datos= req.body

    const {nombre, email, password, rol}= datos

    // const errors=validationResult(req);
    // if (!errors.isEmpty()){
    //     return res.status(400).json(errors)
    // }

    const usuario = new Usuario({nombre, email, password, rol})

    //verificar mail
    // const existeEmail = await Usuario.findOne({email})

    // if (existeEmail){
    //     return res.status(400).json({msg: "El correo ya existe"})

    // }

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



export{getUsers, postUsers, putUsers, deleteUsers}