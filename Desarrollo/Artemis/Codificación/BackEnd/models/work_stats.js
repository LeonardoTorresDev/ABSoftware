const mongoose=require('mongoose')

let Schema=mongoose.Schema

let workStatsSchema=new Schema({
    likes:{
        type: Number,
        default: 0
    },
    dislikes:{
        type: Number,
        default: 0
    },
    comentaries_id:[{
        type: String
    }],
    reports:{
        type: Number,
        default: 0
    }
})


module.exports=mongoose.model('WorkStats',workStatsSchema)