const mongoose=require('mongoose')
const uniqueValidator=require('mongoose-unique-validator')

const Folder=require('./work_folder')

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
    profile_img_url:{
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

userSchema.methods.toJSON=function(){
    let user=this;
    let userObject=user.toObject();
    delete userObject.password;

    return userObject;
}


userSchema.pre('deleteOne',function(next){   

    let id=this._conditions._id

    Folder.deleteMany({owner:id}).exec()
    
    next()

})

userSchema.plugin(uniqueValidator,{message:'{PATH} tiene que ser único'})

module.exports=mongoose.model('User',userSchema)