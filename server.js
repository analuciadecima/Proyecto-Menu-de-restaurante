import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import usuarioRoutes from "./routes/usuarioRoutes.js"
import routerAuth from "./routes/auth.js";
import router from "./routes/productRoutes.js";
import { dbConnection } from "./database/config.js";

dotenv.config();

class Server {
    constructor() {
        // Inicializa Express
        this.app = express();
        // Puerto de la aplicación
        this.port = process.env.PORT || 3201;

        this.usuarioPath="/api/usuarios"
        this.authPath="/api/auth"
        // Ruta para productos
        this.productPath = "/api/products";
        
        // Conectar a la base de datos
        this.dbConnection();
        
        // Middlewares
        this.middlewares();
        
        // Rutas de la aplicación
        this.routes();
    }

    async dbConnection() {
        await dbConnection();
    }

    middlewares() {
        // Middleware para parsear JSON
        this.app.use(express.json());
       
    }

    routes() {
        // Rutas de productos
        this.app.use(this.productPath, productRoutes)
        //revisar!!!
        this.app.use(this.usuarioPath, usuarioRoutes)
        ;
        this.app.use(this.authPath, routerAuth)
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