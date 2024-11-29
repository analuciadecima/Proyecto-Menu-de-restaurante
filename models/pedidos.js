import mongoose from 'mongoose';

const PedidoSchema = new mongoose.Schema({
    productos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Producto',
            required: true,
        },
    ],
    total: {
        type: Number,
        required: true,
    },
    estado: {
        type: String,
        default: 'pendiente',
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true,
    },
});

export default mongoose.model('Pedido', PedidoSchema);