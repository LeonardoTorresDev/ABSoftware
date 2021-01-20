const User=require('../../models/user')

const {verify}=require('../../utils/verify')
const {generateToken}=require('../../utils/generateToken')

const {
    error_response,
    custom_error_response,
    custom_response_user,
    destroyCookieWhenLogged
}=require('../../utils/utils')

const {sendCookie}=require('../../utils/sendCookie')

let googleLogin= async (req,res)=>{

    destroyCookieWhenLogged(req,res)

    if(!req.body.idtoken){
         return custom_error_response(400,res,"No se encontró el idToken, por favor usa una ruta correcta")
    }

    let idToken=req.body.idtoken;

    let googleUser=await verify(idToken)
    .catch(e=>{
        e
    })

    if(googleUser===undefined){
        return  custom_error_response(403,res,"Token inválido")
    }     

    User.findOne({email: googleUser.email},(err,userDB)=>{

        if(err){ return error_response(500,res,err)}

        if(userDB){
            if(userDB.signed_google===false){
                return custom_error_response(400,res,"Debes usar tu login normal")
            }
            else{
                
                let token=generateToken(userDB)

                sendCookie(res,'jwt',token)

                custom_response_user(res,"Usuario logueado con éxito",userDB)
            }
        }
        else{
            let user=new User()

            user.artistic_name=googleUser.name
            user.nick_name=googleUser.name
            user.email=googleUser.email
            user.signed_google=true
            user.profile_img_url=googleUser.img
            user.password='google'

            user.save((err,userDB)=>{

                if(err){ return error_response(500,res,err)}

                let token=generateToken(userDB)

                sendCookie(res,'jwt',token)

                custom_response_user(res,"Usuario creado y logueado con éxito",userDB)
            })
        }
    })
}

module.exports={
    googleLogin
}