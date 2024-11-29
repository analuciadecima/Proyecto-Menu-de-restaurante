
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

const esModRole = (req, res = response, next) => {
    if (!req.usuario) {
        return res.status(500).json({
            msg: 'Se quiere verificar el rol sin validar el token primero',
        });
    }

    const { rol, nombre } = req.usuario;

    if (rol !== 'MOD_ROLE') {
        return res.status(403).json({
            msg: `${nombre} no tiene permisos para realizar esta acción.`,
        });
    }

    next();
};

export { esAdminRole, esModRole };
