
import { Schema, model } from "mongoose";

const CategoriaSchema = Schema ({
nombre:{
    type:String,
    required: [true, "El nombre de la categoria es obligatorio"],
    unique:true
},
estado:{
    type:Boolean,
    default:true,
    required:true
},
usuario:{
    type:Schema.Types.ObjectId,
    ref:"Usuario",
}


}
)

export default model ("Categoria", CategoriaSchema
)