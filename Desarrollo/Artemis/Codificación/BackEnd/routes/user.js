const express=require('express')

const router=express.Router()
const {saveUser}=require('../dao/register')

router.get('/users',(req,res)=>{
    res.json({
        message: 'Hola mundo'
    })
})

router.post('/users',(req,res)=>{
    saveUser(req,res)
})

router.post('/login/:externalLogin?',(req,res)=>{  

})

module.exports=router