import { request, response } from "express"
import Usuario from "../models/usuario.js"
import bcrypt from "bcryptjs"





const getUsers = (req=request, res=response)=>{
    res.json({message: "peticion GET"})
}

const postUsers = async (req, res)=>{

    const datos= req.body

    const {nombre, email, password, rol}= datos

    const usuario = new Usuario({nombre, email, password, rol})

    //verificar mail
    const existeEmail = await Usuario.findOne({email})

    if (existeEmail){
        return res.status(400).json({msg: "El correo ya existe"})

    }

const salt = bcrypt.genSaltSync()
usuario.password = bcrypt.hashSync(password, salt)



await usuario.save()
        res.status(201).json({msg: "Usuario creado con exito!", usuario})

}






const putUsers = (req, res)=>{
    res.json({message: "peticion Put"})
}

const deleteUsers = (req, res)=>{
    res.json({message: "peticion Delete"})
}



export{getUsers, postUsers, putUsers, deleteUsers}