
const {OAuth2Client} = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)

const User=require('../../models/user')

const {verify}=require('../../utils/verify')
const {generateToken}=require('../../utils/generateToken')

let googleLogin= async (req,res)=>{

    if(!req.body.idtoken){
         return res.status(200).json({
            ok: false,
            message: "No idToken founded, please use a correct route"
        })
    }

    let idToken=req.body.idtoken;

    let googleUser=await verify(idToken)
        .catch(e=>{
            res.status(403).json({
                ok:false,
                err:e
            })
    })

    User.findOne({email: googleUser.email},(err,userDB)=>{

        if(err){
            return res.status(500).json({
                ok:false,
                err
            })
        }

        if(userDB){
            if(userDB.signed_google===false){
                return res.status(400).json({
                    ok:false,
                    err:{
                        message:"Should use your normal login"
                    }
                })
            }//user authenticated with google
            else{

                let token=generateToken(userDB)

                //console.log('Google login')

                res.cookie('jwt',token,{httpOnly: true, maxAge: process.env.EXPIRATION_TOKEN})

                res.status(200).json({
                    ok: true,
                    user: userDB
                })
            }
        }
        else{

            let user=new User()

            user.artistic_name=googleUser.name
            user.nick_name=googleUser.name
            user.email=googleUser.email
            user.signed_google=true
            user.password='google'

            user.save((err,userDB)=>{
                if(err){
                    return res.status(500).json({
                        ok:false,
                        err
                    })
                }
                
                let token=generateToken(userDB)

               //console.log('Google register')

                res.cookie('jwt',token,{httpOnly: true, maxAge: process.env.EXPIRATION_TOKEN})

                res.status(200).json({
                    ok: true,
                    user: userDB
                })
            })
        }
    })
}

module.exports={
    googleLogin
}