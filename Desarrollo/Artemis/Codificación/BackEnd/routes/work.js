const express=require('express')

const {get_work}=require('../dao/works/get_work')
const {get_works}=require('../dao/works/get_works')
const {create_work}=require('../dao/works/create_work')
const {updateWork}=require('../dao/works/updateWork')
const {multer_files}=require('../config/multer_config')
const upload = multer_files()

const {updateWorkVersion}=require('../dao/works/updateWorkVersion')

const {updateWorkStats}=require('../dao/works/updateWorkStats')
const {getWorkStats}=require('../dao/works/getWorkStats')

const authUser=require('../middlewares/authUser')

const router=express.Router();

router.route('/works/:folder_name?')
    .get(authUser,(req,res)=>{
        get_works(req, res)
    })
    
router.route('/work/:work_folder?/:work_name?')
    .get(authUser,(req,res)=>{
        get_work(req, res)
    })
    .post(authUser,upload.fields([
        { 'name': 'file', maxCount: 1 },
        { 'name': 'image', maxCount: 1 }
    ]), (req,res)=>{
        create_work(req, res)
    })
    .put(authUser, upload.single('image'), async(req,res)=>{
        updateWork(req,res)
    })
    .delete((req,res)=>{
        //res.send('Obra borrada')
    })

router.route('/workVersion/:work_folder?/:work_name?')
    .put(authUser, upload.single('file'), async (req,res)=>{
        updateWorkVersion(req,res)
    })

router.route('/workStats/:work_folder?/:work_name?')
    .get(authUser,(req,res)=>{
        getWorkStats(req,res)
    })
    .put(authUser,(req,res)=>{
        updateWorkStats(req,res)
    })

module.exports=router;