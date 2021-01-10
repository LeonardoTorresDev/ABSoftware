const express=require('express')

const {get_work}=require('../dao/works/get_work')
const {get_works}=require('../dao/works/get_works')
const {create_work}=require('../dao/works/create_work')
const {updateWork}=require('../dao/works/updateWork')

const {updateWorkVersion}=require('../dao/works/updateWorkVersion')

const {updateWorkStats}=require('../dao/works/updateWorkStats')

const authUser=require('../middlewares/authUser')

const router=express.Router();

router.route('/works/:folder_name?')
    .get(authUser,(req,res)=>{
        get_works(req, res)
    })
    
router.route('/work/:folder_name?')
    .get(authUser,(req,res)=>{
        get_work(req, res)
    })
    .post(authUser,(req,res)=>{
        create_work(req, res)
    })
    .put(authUser,(req,res)=>{
        updateWork(req,res)
    })
    .delete((req,res)=>{
        //res.send('Obra borrada')
    })

router.route('/workVersion/:work_name?')
    .put(authUser,(req,res)=>{
        updateWorkVersion(req,res)
    })

router.route('/workStats/:work_name?')
    .put(authUser,(req,res)=>{
        updateWorkStats(req,res)
    })

module.exports=router;