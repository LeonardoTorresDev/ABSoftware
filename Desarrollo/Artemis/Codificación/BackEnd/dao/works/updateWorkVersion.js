const WorkVersion=require('../../models/work_version')
const Folder=require('../../models/work_folder')
const Work=require('../../models/work')
const cloudinary = require('cloudinary')
const fs = require('fs-extra');

const { 
    custom_response,
    error_response,
    custom_error_response,
    unique_with_name 
} = require('../../utils/utils')


let updateWorkVersion= async(req,res)=>{

    let work_name=req.query.work_name
    let work_folder=req.query.work_folder
 
    Folder.findOne({name:work_folder,owner:req.user._id})
    .exec(async(err,folder)=>{

        if(err){ return error_response(400, res, err) }

        if(!folder){ return custom_error_response(400, res, "Folder no encontrado en el usuario") }

        Work.findOne({name:work_name, folder: folder._id,owner: req.user._id})
        .populate('past_versions')
        .exec(async(err,work)=>{

            if(err){ return error_response(400, res, err) }

            if(!work){ return custom_error_response(400, res, "Obra no encontrada en el folder del usuario") }

            if(!unique_with_name(work.past_versions,req.body.version_name)){return custom_error_response(400, res, "Nombre de la version ya existe")}

            if(req.file == undefined){ return custom_error_response(400, res, "El archivo es requerido para crear una nueva versión") }

            const result = await cloudinary.v2.uploader.upload(req.file.path)
                console.log('\Archivo Subido a cloudinary')

            let version=new WorkVersion({
                name: req.body.version_name,
                created_date: new Date(),
                file_url: result.url,
                file_public_id: result.public_id,
                work: work._id
            })       

            version.save(async(err,versionDB)=>{
                if(err){ return error_response(400, res, err) }

                work.past_versions.push(work.current_version)
                work.current_version=versionDB._id
                
                work.save(async(err,_)=>{
                    if(err){ return error_response(400, res, err) }

                    await fs.unlink(req.file.path)
                    console.log('Archivo borrado de backend')

                    custom_response(res,"Version de la obra creada con exito")
                })
            })
        })
    })
}

module.exports={
    updateWorkVersion
}