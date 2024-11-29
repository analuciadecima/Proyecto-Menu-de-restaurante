import {Router} from "express"
import {check} from "express-validator"
import { validarCampos } from "../middlewares/validar-campos.js"
import { emailExiste, rolValido, existeUsuarioPorId } from "../helpers/db-validators.js"
import { crearPedido, obtenerPedidos, actualizarPedido } from "../controllers/pedidosControllers.js"

import { validarJWT } from "../middlewares/validar-jwt.js"
import { esModRole } from "../middlewares/validar-roles.js"

const routerPedidos=Router();

routerPedidos.get('/', [validarJWT, esModRole], obtenerPedidos);

routerPedidos.post('/', [
    validarJWT, esModRole], crearPedido);

routerPedidos.put('/:id', 
    [validarJWT, esModRole], actualizarPedido);

export default routerPedidos;