import mongoose from "mongoose";

const dbConnection = async ()=>{

    try {
        await mongoose.connect("mongodb+srv://ludecima5:T20xMKwF2XG5S2ru@cluster0.iemvo.mongodb.net/restauranteDB")
        console.log("Base de datos online")
    } catch (error) {
        throw new Error("Error de conexión a la base de datos");
        
        
    }

}

export {dbConnection};