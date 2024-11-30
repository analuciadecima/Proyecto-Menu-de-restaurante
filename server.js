import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import cloudinary from "./config/cloudinary.js";
import subirImgRouter from "./routes/subirImgRoutes.js"
import usuarioRoutes from "./routes/usuarioRoutes.js"
import routerAuth from "./routes/auth.js";
import routerCat from "./routes/categoriaRoutes.js";
import routerProd from "./routes/productosRoutes.js";
import {dbConnection} from "./database/config.js";
import routerBuscar from "./routes/buscar.js";
import routerPedidos from "./routes/pedidos.js";


dotenv.config();

class Server {
    constructor() {
      
        this.app = express();
        this.port = process.env.PORT;
        this.usuarioPath="/api/usuarios"
        this.authPath="/api/auth"
        this.subirImgPath="/api/imagenes"
       this.categoriaPath="/api/categorias"
        this.productoPath = "/api/productos";
        this.pedidosPath="/api/pedidos"
        this.buscarPath="/api/buscar"
      
        this.dbConnection();
        
        this.middlewares();
        
        this.routes();

        console.log(`Cloudinary configurado: ${cloudinary.config().cloud_name}`);
    }

    async dbConnection() {
        await dbConnection();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
       
    }

    routes() {
    
      
        this.app.use(this.usuarioPath, usuarioRoutes)
        ;
        this.app.use(this.authPath, routerAuth)

        this.app.use(this.subirImgPath, subirImgRouter)

        this.app.use(this.categoriaPath, routerCat);

        this.app.use(this.productoPath, routerProd)

        this.app.use(this.pedidosPath, routerPedidos)

        this.app.use(this.buscarPath, routerBuscar)


    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}


const server = new Server();
server.listen();


export default Server