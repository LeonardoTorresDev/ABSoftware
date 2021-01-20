const mongoose=require('mongoose')

let Schema=mongoose.Schema

let workVersionSchema=new Schema({
    name:{
        type: String,
        required: [true, 'Name is required']
    },
    work:{
        type: Schema.Types.ObjectId,
        ref: 'Work'
    },
    created_date:{
        type: Date,
        required: [true, "Created date is required"]
    },
    file_url:{
        type: String,
        required: [true, "File url is required"]
    },
    file_public_id:{
        type: String,
        required: [true, 'File public id is required']
    }
})

module.exports=mongoose.model('WorkVersion', workVersionSchema)