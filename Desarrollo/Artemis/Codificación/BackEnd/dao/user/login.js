const bcrypt=require('bcrypt')

const User=require('../../models/user')

const {generateToken}=require('../../utils/generateToken')

const {
    error_response,
    custom_error_response,
    destroyCookieWhenLogged,
    custom_response
}=require('../../utils/utils')

const {sendCookie}=require('../../utils/sendCookie')

let loginUser=(req,res)=>{
    
    destroyCookieWhenLogged(req,res)

    let body=req.body

    User.findOne({email: body.email},(err,userDB)=>{

        if(err){ return error_response(500,res,err)}

        if(!userDB){ return custom_error_response(400,res,"El usuario no existe") }

        if(!bcrypt.compareSync(body.password,userDB.password)){
            return custom_error_response(401,res,"La contraseña es incorrecta")
        }

        let token=generateToken(userDB)

        sendCookie(res,'jwt',token)

        custom_response(res,"Usuario logueado con éxito")
    })
}

module.exports={
    loginUser
}