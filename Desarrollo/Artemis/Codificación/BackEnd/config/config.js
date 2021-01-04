const mongoose = require('mongoose')

process.env.PORT=process.env.PORT || 3000
process.env.MONGO_URL= 'mongodb+srv://Mauricio:1234@clusterartemis.ofy5d.mongodb.net/Artemis?retryWrites=true&w=majority'

process.env.SEED='dev-seed'
process.env.EXPIRATION_TOKEN=1000*60*60*24*30

process.env.GOOGLE_CLIENT_ID='12773282290-heah8rpv61jhoppeetnodg0rnqhufupt.apps.googleusercontent.com'

mongoose.connect(process.env.MONGO_URL,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
},(err,res)=>{
    if(err) throw err
    console.log("Database online")
})