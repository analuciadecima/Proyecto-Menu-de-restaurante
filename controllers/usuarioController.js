import { request, response } from "express"

const getUsers = (req=request, res=response)=>{
    res.json({message: "peticion GET"})
}

const postUsers = (req, res)=>{
const objeto = req.body

    res.json({message: "peticion Post"})
}

const putUsers = (req, res)=>{
    res.json({message: "peticion Put"})
}

const deleteUsers = (req, res)=>{
    res.json({message: "peticion Delete"})
}



export{getUsers, postUsers, putUsers, deleteUsers}