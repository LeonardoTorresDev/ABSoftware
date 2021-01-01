const express=require('express');
const {get_work}=require('../dao/works/get_work');
const {get_works}=require('../dao/works/get_works');
const {create_work}=require('../dao/works/create_work');
const router=express.Router();

router.route('/works/:user_id?')
    .get((req,res)=>{
        get_works(req.query.user_id, res)
    })
    
router.route('/work/:user_id?/:name?/:stats?/:versions?')
    .get((req,res)=>{
        get_work(req, res)
    })
    .post((req,res)=>{
        create_work(req, res)
    })
    .put((req,res)=>{
        res.send('Obra actualizada con id ' + req.query.work_id)
    })
    .delete((req,res)=>{
        res.send('Obra borrada')
    })

module.exports=router;