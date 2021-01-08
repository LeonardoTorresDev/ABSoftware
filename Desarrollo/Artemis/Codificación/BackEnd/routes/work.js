const express=require('express');
const {get_work}=require('../dao/works/get_work');
const {get_works}=require('../dao/works/get_works');
const {create_work}=require('../dao/works/create_work')

const authUser=require('../middlewares/authUser')

const router=express.Router();

router.route('/works/:folder_name?')
    .get((req,res)=>{
        get_works(req, res)
    })
    
router.route('/work/:folder_name?/:work_name?/:stats?/:versions?')
    .get((req,res)=>{
        get_work(req, res)
    })
    .post(authUser,(req,res)=>{
        create_work(req, res)
    })
    .put((req,res)=>{
        //res.send('Obra actualizada con id ' + req.query.work_id)
    })
    .delete((req,res)=>{
        //res.send('Obra borrada')
    })

module.exports=router;