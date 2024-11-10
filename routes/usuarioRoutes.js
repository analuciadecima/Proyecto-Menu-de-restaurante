import {Router} from "express"
import {check} from "express-validator"
import { getUsers, postUsers, putUsers, deleteUsers } from "../controllers/usuarioController.js"
const router = Router()


router.get("/", getUsers)

router.post("/",[
    check ("nombre", "El nombre es obligatorio").notEmpty(),
    check("password", "La contraseña debe tener como mínimo 8 caracteres, mayúsculas, minúsculas, números y símbolos especiales").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
    check("email", "El email no es válido").isEmail()
    
], postUsers)

router.put("/:id", putUsers)

router.delete("/:id", deleteUsers)




export default router