
import express from "express"
import dotenv from "dotenv"
import { dbConnection } from "./database/config.js";
import menuRoutes from "./routes/menuRoutes.js"

dotenv.config()

dbConnection()


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});



    class Server {
        constructor(){
            this.app=express()
            this.port=process.env.PORT;
    // this.usuarioPath="/api/usuarios"
    // this.authPath="/api/auth";
    // this.categoriaPath= "/api/categorias"
    
    this.dbConnection();
    this.middlewares()
    this.routes()
        }
        async dbConnection(){
            await dbConnection ()
        }



        routes() {
            this.app.use(this.usuarioPath, router);
            this.app.use(this.authPath, routerAuth);
            this.app.use(this.categoriaPath, routerCat);
            this.app.use(this.productoPath, routerProd);
          }
        
          middlewares() {
            this.app.use(express.json());
            this.app.use(express.static("public"));
          }
        
          listen() {
            this.app.listen(this.port, () =>
              console.log("Server online, port:", this.port)
            );
          }

}



export default Server