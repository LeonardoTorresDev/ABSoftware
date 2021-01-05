const express=require('express')
const jwt=require('jsonwebtoken')

const router=express.Router()

const {custom_error_response}=require('../utils/utils')

router.use((req,res,next)=>{
    
    const token=req.cookies.jwt

    if(token){
        jwt.verify(token,process.env.SEED,(err,decoded)=>{
            if(err){
                return custom_error_response(401,res,"Unvalid token")
            }
            else{
                req.user=decoded.user
                next()
            }
        })
    }
    else{
        return custom_error_response(400,res,"User not logged")
    }
    
})

module.exports=router