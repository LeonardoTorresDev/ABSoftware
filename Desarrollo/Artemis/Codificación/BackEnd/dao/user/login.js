const bcrypt=require('bcrypt')

const User=require('../../models/user')
const {generateToken}=require('../../utils/generateToken')

let loginUser=(req,res)=>{

    let body=req.body

    User.findOne({email: body.email},(err,userDB)=>{

        if(err){
            return res.status(500).json({
                ok: false,
                err
            })
        }

        if(!userDB){
            return res.status(400).json({
                ok: false,
                err:{
                    message: "User or password doesn't match"
                }
            })
        }

        if(!bcrypt.compareSync(body.password,userDB.password)){
            return res.status(400).json({
                ok: false,
                err:{
                    message: "User or password doesn't match"
                }
            })
        }

        let token=generateToken(userDB)

        res.cookie('jwt',token,{httpOnly: true, maxAge: process.env.EXPIRATION_TOKEN})

        res.status(200).json({
            ok: true,
            user: userDB
        })

    })
}


module.exports={
    loginUser
}