// import mongoose from "mongoose";

// const dbConnection = async ()=>{

//     try {
//         await mongoose.connect(process.env.DATABASE_CNN)
//         console.log("Base de datos online")
//     } catch (error) {
//         throw new Error("Error de conexión a la base de datos");
        
        
//     }

// }

// export {dbConnection};

import mongoose from "mongoose";

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Base de datos conectada correctamente");
    } catch (error) {
        console.error("Error al conectar la base de datos:", error);
        throw new Error("Error de conexión a la base de datos");
    }
};

export { dbConnection };
