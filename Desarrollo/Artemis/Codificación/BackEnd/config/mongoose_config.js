const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)

mongoose.connect(process.env.MONGODB_URI,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
},(err,res)=>{
    if(err) throw err
    console.log("Conectado a Base de Datos")
})