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
    modified_by:[{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    created_date:{
        type: Date,
        required: [true, "Created date is required"]
    },
    file:{
        type: String,
        required: [true, "File is required"]
    }
})

module.exports=mongoose.model('WorkVersion', workVersionSchema)