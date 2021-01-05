const mongoose=require('mongoose')
const uniqueValidator=require('mongoose-unique-validator')

let Schema=mongoose.Schema

let workStatsSchema=new Schema({
    work:{
        type: Schema.Types.ObjectId,
        ref: 'Work',
        required: [true, "Work is required"]
    },
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

workSchema.plugin(uniqueValidator,{message:'{PATH} has to be unique'});