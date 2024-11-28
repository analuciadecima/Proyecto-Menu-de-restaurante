import Usuario from "../models/usuario.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import {generarJWT} from "../helpers/genera-jwt.js"


const login = async (req, res)=>{
    
const {email, password} = req.body
console.log(req.body)
try {

    const usuario=await Usuario.findOne({email})
    if(!usuario){
        return res.status(400).json({
            msg: "Correo / contraseña no son correctos"
        })
    }
//si el usuario esta activo
    if(!usuario.estado){
        return res.status(400).json({
            msg: "Su cuenta está con pronlemas, comuniquese con el administrador"
        })

    }

    //verificar contraseña
    const validarPassword=bcrypt.compareSync(password,usuario.password);
    if(!validarPassword) {
        return res.status(400).json({
            msg:"Usuario o contraseña incorrectos"
        })
    }

 //token

 const token = await generarJWT(usuario.id);

    res.status(202).json({
        msg: "login ok",
        uid:usuario.id,
        token
    })    
} catch (error) {
    res.status(500).json({
        msg:"Comuniquese con el administrador",
    })
    
}


}

export {login}