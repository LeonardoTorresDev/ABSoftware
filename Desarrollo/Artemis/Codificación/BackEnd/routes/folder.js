const express=require('express');
const {get_folder}=require('../dao/folders/get_folder');
const {get_folders}=require('../dao/folders/get_folders');
const {update_folder}=require('../dao/folders/update_folder');
const {delete_folder}=require('../dao/folders/delete_folder');
const {create_folder}=require('../dao/folders/create_folder');
const authUser=require('../middlewares/authUser')
const router=express.Router();

router.use('/folder', authUser)
router.use('/folders', authUser)

router.route('/folders')
    .get((req,res)=>{
        get_folders(req, res)
    })
    
router.route('/folder/:folder_name?')
    .get((req,res)=>{
        get_folder(req, res)
    })
    .post((req,res)=>{
        create_folder(req, res)
    })
    .put((req,res)=>{
        update_folder(req, res)
    })
    .delete((req,res)=>{
        delete_folder(req, res)
    })

module.exports=router;