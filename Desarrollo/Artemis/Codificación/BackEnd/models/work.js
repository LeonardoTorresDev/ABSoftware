const mongoose=require('mongoose')
const uniqueValidator=require('mongoose-unique-validator')

let Schema=mongoose.Schema

let workSchema=new Schema({
    name:{
        type: String,
        unique: true,
        required: [true, 'Name is required']
    },
    tag:[{
        type: String
    }],
    owner_id:{
        type: String,
        required: [true, "Owner id is required"]
    },
    img:{
        type: String
    },
    stats_id:{
        type: String,
        required: [true, "Stats id is required"]
    },
    private:{
        type: Boolean,
        default: true
    },
    collaborative:{
        type: Boolean,
        default: false
    },
    collabs_ids:[{
        type: String
    }],
    folder_id:{
        type: String,
        required: [true, "Folder id is required"]
    },
    past_versions_ids:[{
        type: String
    }],
    current_version_id:{
        type: String,
        required: [true, "Current version id is required"] 
    }
})

workSchema.plugin(uniqueValidator,{message:'{PATH} has to be unique'});

module.exports=mongoose.model('workSchema', workSchema);