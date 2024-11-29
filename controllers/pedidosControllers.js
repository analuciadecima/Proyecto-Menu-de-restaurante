import {response, request} from "express";

import Pedido from "../models/pedidos.js"


const crearPedido=async(req, res)=>{
    const {productos, total}=req.body;

    const pedido=new Pedido({productos, total, usuario: req.usuario._id,})

    await pedido.save()

    res.json({
        msg: "Pedido creado exitosamente", pedido,
    })
};

const obtenerPedidos=async(req, res)=>{
    const pedidos=await Pedido.find().populate("usuario", "nombre").populate("productos", "nombre precio");

    res.json({
        pedidos,
    })
}

const actualizarPedido = async (req, res) => {
    const { id } = req.params;
    const { estado } = req.body;

    const pedido = await Pedido.findByIdAndUpdate(id, { estado }, { new: true });

    res.json({
        msg: 'Pedido actualizado',
        pedido,
    });
};

export { crearPedido, obtenerPedidos, actualizarPedido };