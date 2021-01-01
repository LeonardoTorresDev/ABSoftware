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
    comentaries:[{
        type: Schema.Types.ObjectId,
        ref: 'Comentary'
    }],
    reports:{
        type: Number,
        default: 0
    }
})


module.exports=mongoose.model('WorkStats',workStatsSchema)