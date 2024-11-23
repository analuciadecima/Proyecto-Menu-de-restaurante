import {Router} from "express"
import {check} from "express-validator"
import { getUsers, postUsers, putUsers, deleteUsers } from "../controllers/usuarioController.js"
import { validarCampos } from "../middlewares/validar-campos.js"
import { emailExiste, rolValido, existeUsuarioPorId } from "../helpers/db-validators.js"
import { validarJWT } from "../middlewares/validar-jwt.js"
const router = Router()


router.get("/", getUsers)

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
    [validarJWTgit,
            check("id", "No es un id válido").isMongoId(),
check("id").custom(existeUsuarioPorId),
validarCampos   
], deleteUsers)




export default router