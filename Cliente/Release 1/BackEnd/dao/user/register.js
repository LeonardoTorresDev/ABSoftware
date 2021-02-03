const User=require('../../models/user')

const {
    error_response,
    custom_response_user
}=require('../../utils/utils')

const {sendCookie}=require("../../utils/sendCookie")
const {generateToken}=require("../../utils/generateToken")

const bcrypt=require('bcrypt')

let saveUser=(req,res)=>{
    
    let body=req.body

    let user=new User({
        artistic_name: body.artistic_name,
        nick_name: body.nick_name,
        email: body.email,
        password: bcrypt.hashSync(body.password,10),
    })

    user.save((err,userDB)=>{

        if(err){return error_response(400,res,err)}
        
        let token=generateToken(userDB)

        sendCookie(res,'jwt',token)

        custom_response_user(res,"Usuario creado y logueado con éxito",userDB)

    })
}


module.exports={
    saveUser
}