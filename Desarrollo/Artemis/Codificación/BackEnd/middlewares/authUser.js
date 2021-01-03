const express=require('express')
const jwt=require('jsonwebtoken')

const router=express.Router()

router.use((req,res,next)=>{
    const token=req.cookies.jwt

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
})

module.exports=router