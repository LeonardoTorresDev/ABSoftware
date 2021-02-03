const express=require('express')
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')

const {cors_config}=require('./config/cors_config')

//Configuracion de variables de entorno
require('./config/env_config')

const app=express()
//configuracion de mongoose
require('./config/mongoose_config')

//cofiguracion del CORS
cors_config(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

//Configuracion de cloudinary
require('./config/cloudinary_config')

app.use(require('./routes/index'))
app.use(express.static(__dirname+'/public'));

app.listen(process.env.PORT,()=>{
    console.log("Escuchando el puerto",process.env.PORT)
})