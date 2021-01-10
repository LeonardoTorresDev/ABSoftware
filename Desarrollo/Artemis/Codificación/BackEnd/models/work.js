const mongoose=require('mongoose')

let Schema=mongoose.Schema

let workSchema=new Schema({
    name:{
        type: String,
        required: [true, 'Name is required']
    },
    tag:[{
        type: String
    }],
    owner:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User is required']
    },
    img_url:{
        type: String
    },
    img_public_id:{
        type: String
    },
    type:{
        type: String
    },
    stats:{
        type: Schema.Types.ObjectId,
        ref: 'WorkStats'
    },
    private:{
        type: Boolean,
        default: false
    },
    description:{
        type: String
    },
    private_viewers:[{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    folder:{
        type: Schema.Types.ObjectId,
        ref: 'WorkFolder',
        required: [true, "Folder is required"]
    },
    past_versions:[{
        type: Schema.Types.ObjectId,
        ref: 'WorkVersion'
    }],
    current_version:{
        type: Schema.Types.ObjectId,
        ref: 'WorkVersion'
    }
})

module.exports=mongoose.model('Work', workSchema)