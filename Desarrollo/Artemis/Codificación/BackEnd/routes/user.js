const express=require('express')

const router=express.Router()

const authUser=require('../middlewares/authUser')

const {saveUser}=require('../dao/user/register')
const {loginUser}=require('../dao/user/login')
const {googleLogin}=require('../dao/user/loginGoogle')
const {logout}=require('../dao/user/logout')

router.post('/users',(req,res)=>{
    saveUser(req,res)
})

router.post('/login/:externalLogin?',(req,res)=>{  
    let ext=req.params.externalLogin   
    switch(ext){
        case 'facebook':
            console.log('Facebook')
            break
        case 'google':
            googleLogin(req,res)
            break
        default:
            loginUser(req,res)
            break
    }
})

router.use(authUser)

router.post('/logout',(req,res)=>{
    logout(req,res)
})

module.exports=router