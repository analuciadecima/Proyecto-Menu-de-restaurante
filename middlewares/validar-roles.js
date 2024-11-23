
const esAdminRole=(req,res,next)=>{

    console.log(req.usuario)
    
    if (!req.usuario){
        return res.status(500).json({
            msg: "Sequiere validar el rol sin verificar el token"
        })
    }
    
const {rol, nombre}= req.usuario;

if(rol !== "ADMIN_ROLE"){
    return res.status(401).json({
        msg: "no es administrador"
    })
}

    next()
}

export {esAdminRole}