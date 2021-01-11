const express=require('express')

const {createComentary}=require('../dao/comentary/createComentary')
const {updateComentary}=require('../dao/comentary/updateComentary')
const {deleteComentary}=require('../dao/comentary/deleteComentary')
const {getComentaries}=require('../dao/comentary/getComentaries')

const router=express.Router()
const authUser=require('../middlewares/authUser')

router.route('/comentaries/:nick_name/:work_folder/:work_name')
    .get((req,res)=>{
        getComentaries(req,res)
    })

router.route('/comentary/:nick_name/:work_folder/:work_name')
    .post(authUser,(req,res)=>{
        createComentary(req,res)
    })

router.route('/comentary')
    .put(authUser,(req,res)=>{
        updateComentary(req,res)
    })
    .delete(authUser,(req,res)=>{
        deleteComentary(req,res)
    })

module.exports=router