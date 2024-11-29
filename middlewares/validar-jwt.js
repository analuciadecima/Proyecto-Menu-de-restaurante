import { response, request } from "express"

import jwt from 
"jsonwebtoken"
import Usuario from "../models/usuario.js"

const validarJWT=async(req=re,res,next)=>{
const token = req.header("x-token")

if (!token){
    return res.status(401).json({
        msg: "No hay token"
    })
}


try {
    const { uid }  = jwt.verify(token, process.env.PRIVATESECRETKEY);
console.log("UID del token", uid)
    const usuario = await Usuario.findById(uid);

    if(!usuario){
        return res.status(401).json({msg: "usuario no existe en la base de datos"})
    }

    
    if(!usuario.estado){
        return res.status(401).json({msg: "token no es valido"})
    }

req.usuario=usuario;

next()


    
} catch (error) {
    console.log(error)
    res.status(401).json({
        msg: "Token no es válido"
    })
    
}

}

export {validarJWT}