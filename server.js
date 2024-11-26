import express from "express";
import dotenv from "dotenv";
import usuarioRoutes from "./routes/usuarioRoutes.js"
import routerAuth from "./routes/auth.js";
import routerCat from "./routes/categoriaRoutes.js";
import routerProd from "./routes/productosRoutes.js";
import { dbConnection } from "./database/config.js";


dotenv.config();

class Server {
    constructor() {
      
        this.app = express();
        this.port = process.env.PORT || 3201;
        this.usuarioPath="/api/usuarios"
        this.authPath="/api/auth"
       this.categoriaPath="/api/categorias"
        this.productoPath = "/api/productos";
      
        this.dbConnection();
        
        this.middlewares();
        
        this.routes();
    }

    async dbConnection() {
        await dbConnection();
    }

    middlewares() {
       
        this.app.use(express.json());
       
    }

    routes() {
    
      
        this.app.use(this.usuarioPath, usuarioRoutes)
        ;
        this.app.use(this.authPath, routerAuth)

        this.app.use(this.categoriaPath, routerCat);

        this.app.use(this.productoPath, routerProd)
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