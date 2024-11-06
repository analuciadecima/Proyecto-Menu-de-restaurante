import mongoose from "mongoose";

const dbConnection = async ()=>{

    try {
        await mongoose.connect("mongodb+srv://ludecima5:u6qP4ZgK0DOmHoRO@cluster0.lcg7y.mongodb.net/restauranteDB")
        console.log("Base de datos online")
    } catch (error) {
        throw new Error("Error de conexión a la base de datos");
        
        
    }

}

export {dbConnection};