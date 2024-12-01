import {Router} from "express"
import {check} from "express-validator"
import { validarCampos } from "../middlewares/validar-campos.js"
import { validarJWT } from "../middlewares/validar-jwt.js"
import { esAdminRole } from "../middlewares/validar-roles.js" 
import { actualizarCategoria, agregarCategoria, borrarCategoria, traerCategorias } from "../controllers/categoriaController.js"

const routerCat = Router()

routerCat.get("/",traerCategorias);

routerCat.post("/",[
    validarJWT, esAdminRole, check("nombre", "EL nombre es obligatorio").notEmpty(),
   validarCampos,
],agregarCategoria);

routerCat.put("/:id", actualizarCategoria);

routerCat.delete("/:id", borrarCategoria)



export default routerCat;