const mongoose=require('mongoose')

let Schema=mongoose.Schema

let workFolderSchema=new Schema({
    owner:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User is required']
    },
    name:{
        type: String,
        required: [true, 'Name is required']
    },
    works:[{
        type: Schema.Types.ObjectId,
        ref: 'Work'
    }]
})

module.exports=mongoose.model('WorkFolder', workFolderSchema)