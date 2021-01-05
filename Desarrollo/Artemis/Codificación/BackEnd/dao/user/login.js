const bcrypt=require('bcrypt')

const User=require('../../models/user')

const {generateToken}=require('../../utils/generateToken')

const {
    error_response,
    custom_error_response,
    destroyCookieWhenLogged,
    custom_response
}=require('../../utils/utils')

let loginUser=(req,res)=>{
    
    destroyCookieWhenLogged(req,res)

    let body=req.body

    User.findOne({email: body.email},(err,userDB)=>{

        if(err){ return error_response(500,res,err)}

        if(!userDB){ return custom_error_response(400,res,"User doesn't exist") }

        if(!bcrypt.compareSync(body.password,userDB.password)){
            return custom_error_response(401,res,"Password doesn't match")
        }

        let token=generateToken(userDB)

        res.cookie('jwt',token,{httpOnly: true, maxAge: process.env.EXPIRATION_TOKEN})

        custom_response(res,"User login succesfully done")
    })
}


module.exports={
    loginUser
}