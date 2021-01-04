const express=require('express')
const jwt=require('jsonwebtoken')

const router=express.Router()

router.use((req,res,next)=>{
    
    const token=req.cookies.jwt

    if(token){
        jwt.verify(token,process.env.SEED,(err,decoded)=>{
            if(err){
                return res.status(401).json({
                    ok: false,
                    err:{
                        message: "Unvalid token"
                    }
                })
            }
            else{
                req.user=decoded.user
                next()
            }
        })
    }
    else{
        return res.status(400).json({
            ok: false,
            err:{
                message: "User not logged"
            }
        })
    }
    
})

module.exports=router