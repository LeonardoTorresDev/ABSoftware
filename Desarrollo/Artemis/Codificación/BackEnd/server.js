require('./config/config')

const express=require('express')

const app=express()

app.listen(process.env.PORT,()=>{
    console.log("Escuchando el puerto",process.env.PORT)
})