const express=require('express');
//const {get_folder}=require('../dao/folders/get_folder');
//const {get_folders}=require('../dao/folders/get_folders');
const {create_folder}=require('../dao/folders/create_folder');
const router=express.Router();

router.route('/folders/:user_id?')
    .get((req,res)=>{
        //get_folders(req, res)
    })
    
router.route('/folder/:nick_name?')
    .get((req,res)=>{
        //get_folder(req, res)
    })
    .post((req,res)=>{
        create_folder(req, res)
    })
    .put((req,res)=>{
        res.send('Folder actualizado')
    })
    .delete((req,res)=>{
        res.send('Folder borrado')
    })

module.exports=router;