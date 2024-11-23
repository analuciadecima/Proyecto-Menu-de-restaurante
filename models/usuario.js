
import { Schema, model } from "mongoose";

const UsuarioSchema = new Schema({
    nombre:{type: String, required: [true, "El nombre es requerido"]},
    email: {type: String, required: [true, "El email es obligatorio"], unique:true},
    password: {type: String, required:[true, "La contraseña es obligatoria"]},
    img: {
        type:String,
        default:"https://media.istockphoto.com/id/1337144146/es/vector/vector-de-icono-de-perfil-de-avatar-predeterminado.jpg?s=612x612&w=0&k=20&c=YiNB64vwYQnKqp-bWd5mB_9QARD3tSpIosg-3kuQ_CI="
    },
    rol:{
        type:String,
        required:true,
        
    },
    estado:{
        type:Boolean,
        default:true,
    },

});

UsuarioSchema.methods.toJSON = function(){
    const {password, ...usuario} = this.toObject();
    return usuario;
}

export default model("Usuario", UsuarioSchema);
