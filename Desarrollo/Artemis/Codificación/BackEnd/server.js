require('./config/config')
const express=require('express')
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')

const app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cookieParser())

app.use(require('./routes/index'))

app.use(express.static(__dirname+'/public'));

app.listen(process.env.PORT,()=>{
    console.log("Escuchando el puerto",process.env.PORT)
})