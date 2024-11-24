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
      
        this.app = express();
        
        this.port = process.env.PORT;

        this.usuarioPath="/api/usuarios"
        this.authPath="/api/auth"
       
        this.productPath = "/api/products";
        
      
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
        
        this.app.use(this.productPath, productRoutes)
      
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