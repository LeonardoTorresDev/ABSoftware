const mongoose=require('mongoose')

let Schema=mongoose.Schema

let comentarySchema=new Schema({
    owner:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User is required']
    },
    text:{
        type: String,
        required: [true,'Text is required']
    },
    creation_Date:{
        type: Date,
        required: [true,'Date is required']
    },
    edit_Date:{
        type: Date
    },
    work:{
        type: Schema.Types.ObjectId,
        ref: 'Work',
        required: [true,'Work is required']
    }
})

module.exports=mongoose.model('Comentary',comentarySchema)