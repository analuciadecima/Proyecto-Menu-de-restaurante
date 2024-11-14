
import Role from "../models/rol.js"
import Usuario from "../models/usuario.js"

const rolValido=async (rol)=>{
    const esRolValido = await Role.findOne({rol})

    if(!esRolValido){
        throw new Error(`${rol} no es un rol válido`)
    }
}

const emailExiste=async(email)=>{
    const existeEmail = await Usuario.findOne({email})

    if (emailExiste){
        throw new Error(el `${email} ya existe`)

    }

}

const existeUsuarioPorId=async(id)=>{
    const existeUsuario = await Usuario.findById(id)
    if(!existeUsuario){
        throw new Error (`El id ${id} no existe`)
    }
if (!existeUsuario.estado){
    throw new Error (`El usuario ${existeUsuario.nombre} ya está inactivo`)
}
}




export {rolValido, emailExiste, existeUsuarioPorId}