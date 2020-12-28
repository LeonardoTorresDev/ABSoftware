const mongoose=require('mongoose')
const uniqueValidator=require('mongoose-unique-validator')

let Schema=mongoose.Schema

let workFolderSchema=new Schema({
    name:{
        type: String,
        unique: true,
        required: [true, 'Name is required']
    },
    works_id:[{
        type: String
    }]
})

workFolderSchema.plugin(uniqueValidator,{message:'{PATH} has to be unique'});

module.exports=mongoose.model('WorkFolder', workFolderSchema);