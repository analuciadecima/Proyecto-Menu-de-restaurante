import {Router} from "express"
import {check} from "express-validator"
import { validarCampos } from "../middlewares/validar-campos.js"
import { validarJWT } from "../middlewares/validar-jwt.js"
import { esAdminRole } from "../middlewares/validar-roles.js"
import { emailExiste, rolValido, existeUsuarioPorId } from "../helpers/db-validators.js"
import { getUsers, postUsers, putUsers, deleteUsers } from "../controllers/usuarioController.js"


const router = Router()


router.get("/",[
    validarJWT,
    esAdminRole,
], getUsers)

router.post("/",[
    check ("nombre", "El nombre es obligatorio").notEmpty(),
    check("password", "La contraseña debe tener como mínimo 8 caracteres, mayúsculas, minúsculas, números y símbolos especiales").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
    check("email", "El email no es válido").isEmail(),
    check("email").custom(emailExiste),
    check("rol").custom(rolValido),
    validarCampos
    
], postUsers)

router.put("/:id",[check("id", "No es un id válido").isMongoId(),
check("id").custom(existeUsuarioPorId),
check("rol").custom(rolValido),
validarCampos,
],putUsers)

router.delete("/:id",
    [validarJWT,
        esAdminRole,
            check("id", "No es un id válido").isMongoId(),
check("id").custom(existeUsuarioPorId),
validarCampos   
], deleteUsers)




export default router