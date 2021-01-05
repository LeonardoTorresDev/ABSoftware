const User=require('../../models/user')

const {verify}=require('../../utils/verify')
const {generateToken}=require('../../utils/generateToken')
const {
    error_response,
    custom_error_response,
    custom_response,
    destroyCookieWhenLogged
}=require('../../utils/utils')

let googleLogin= async (req,res)=>{

    destroyCookieWhenLogged(req,res)

    if(!req.body.idtoken){
         return custom_error_response(400,res,"No idToken founded, please use a correct route")
    }

    let idToken=req.body.idtoken;

    let googleUser=await verify(idToken)
    .catch(e=>{
        e
    })

    if(googleUser===undefined){
        return  custom_error_response(403,res,"Unvalid token")
    }     

    User.findOne({email: googleUser.email},(err,userDB)=>{

        if(err){ return error_response(500,res,err)}

        if(userDB){
            if(userDB.signed_google===false){
                return custom_error_response(400,res,"Should use your normal login")
            }
            else{
                
                let token=generateToken(userDB)

                res.cookie('jwt',token,{httpOnly: true, maxAge: process.env.EXPIRATION_TOKEN})

                custom_response(res,"User login succesfully done")
            }
        }
        else{
            let user=new User()

            user.artistic_name=googleUser.name
            user.nick_name=googleUser.name
            user.email=googleUser.email
            user.signed_google=true
            user.profile_img=googleUser.img
            user.password='google'

            user.save((err,userDB)=>{

                if(err){ return error_response(500,res,err)}

                let token=generateToken(userDB)

                res.cookie('jwt',token,{httpOnly: true, maxAge: process.env.EXPIRATION_TOKEN})

                custom_response(res,"User login and register succesfully done")
            })
        }
    })
}

module.exports={
    googleLogin
}