
import express from "express"
import dotenv from "dotenv"
import { dbConnection } from "./database/config.js";
import menuRoutes from "./routes/menuRoutes.js"

dotenv.config()

dbConnection()
const app=express()


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});