import express from "express"
const app=express()
const port=3000

app.get("/api", (req, res)=>{
    res.send("peticion }get")
})

app.listen(3000)
console.log("server online 3000")

import Server from "./server"

const server= new Server ()