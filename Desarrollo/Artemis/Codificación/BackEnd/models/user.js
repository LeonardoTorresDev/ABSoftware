const mongoose=require('mongoose')
const uniqueValidator=require('mongoose-unique-validator')

let Schema=mongoose.Schema

let userSchema=new Schema({
    artistic_name:{
        type: String,
        unique: true,
        required: [true,'Artistic name is required']
    },
    nick_name:{
        type: String,
        unique: true,
        required: [true,'Nick name is required']
    },
    email:{
        type: String,
        unique: true,
        required:[true,'Email is required']
    },
    password:{
        type: String,
        required:[true,'Password is required']
    },
    profile_img:{
        type: String
    },
    followers:[{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    folders:[{
        type: Schema.Types.ObjectId,
        ref: 'WorkFolder'
    }],
    signed_google:{
        type: Boolean,
        default: false
    },
    signed_facebook:{
        type: Boolean,
        default: false
    }
})

userSchema.plugin(uniqueValidator,{message:'{PATH} has to be unique'})

module.exports=mongoose.model('User',userSchema)