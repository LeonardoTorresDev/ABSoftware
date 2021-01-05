const express=require('express')

const {saveUser}=require('../dao/user/register')
const {loginUser}=require('../dao/user/login')
const {googleLogin}=require('../dao/user/loginGoogle')
const {logout}=require('../dao/user/logout')

const router=express.Router()
const authUser=require('../middlewares/authUser')

router.post('/users',(req,res)=>{
    saveUser(req,res)
})

router.post('/users/login/:google?',(req,res)=>{  
    if(req.params.google==="google"){
        googleLogin(req,res)
    }
    else{
        loginUser(req,res)
    }   
})

router.get('/users/logout',authUser,(req,res)=>{
    logout(req,res)
})

module.exports=router