const mongoose = require('mongoose')

process.env.PORT=process.env.PORT || 3000
process.env.MONGO_URL=process.env.MONGO_URL || 'mongodb+srv://Mauricio:1234@clusterartemis.ofy5d.mongodb.net/Artemis?retryWrites=true&w=majority'

let urlDataBase = process.env.MONGO_URL

process.env.URLDB=urlDataBase

mongoose.connect(process.env.URLDB,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
},(err,res)=>{
    if(err) throw err
    console.log("Database online")
})