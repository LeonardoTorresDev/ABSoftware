const express=require('express')

const {saveUser}=require('../dao/user/register')

const {loginUser}=require('../dao/user/login')
const {googleLogin}=require('../dao/user/loginGoogle')
const {logout}=require('../dao/user/logout')

const {getUser}=require('../dao/user/getUser')
const {getUsers}=require('../dao/user/getUsers')
const {searchUsers} = require('../dao/user/searchUsers')

const {updateUser}=require('../dao/user/updateUser')
const {deleteUser}=require('../dao/user/deleteUser')

const router=express.Router()
const authUser=require('../middlewares/authUser')


router.get('/user',authUser,(req,res)=>{
    getUser(req,res)
})

router.get('/users/search/:term',authUser,(req,res)=>{
    searchUsers(req,res)
})

router.route('/users')
    .get(authUser,(req,res)=>{
        getUsers(req,res)
    })
    .post((req,res)=>{
        saveUser(req,res)
    })
    .put(authUser,(req,res)=>{
        updateUser(req,res)
    })
    .delete(authUser,(req,res)=>{
        deleteUser(req,res)
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