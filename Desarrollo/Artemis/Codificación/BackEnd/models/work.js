const mongoose=require('mongoose')
const uniqueValidator=require('mongoose-unique-validator')

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
        ref: 'User'
    },
    img:{
        type: String
    },
    stats:{
        type: Schema.Types.ObjectId,
        ref: 'WorkStats'
    },
    private:{
        type: Boolean,
        default: true
    },
    collaborative:{
        type: Boolean,
        default: false
    },
    collabs:[{
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
        ref: 'WorkVersion',
        required: [true, "Current version id is required"] 
    }
})

workSchema.plugin(uniqueValidator,{message:'{PATH} has to be unique'});

module.exports=mongoose.model('workSchema', workSchema);