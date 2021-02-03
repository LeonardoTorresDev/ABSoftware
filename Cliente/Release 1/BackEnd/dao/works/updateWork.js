const Work=require('../../models/work')
const Folder=require('../../models/work_folder')
const cloudinary = require('cloudinary')
const fs = require('fs-extra');

const {
    error_response, 
    custom_error_response,
    custom_response,
    unique_with_name,
    fillExistingArray,
    duplicateValuesInTwoArray
}=require('../../utils/utils')

let updateWork= async(req,res)=>{
 
    Folder.findOne({name: req.query.folder_name,owner: req.user._id})
    .exec((err,folder)=>{

        if(err){ return error_response(400, res, err) }
        if(folder == null){ return custom_error_response(400, res, "Folder no encontrado en el usuario") }

        Work.findOne({name: req.query.work_name,owner: req.user._id,folder:folder._id})
        .populate('folder')
        .exec(async (err,work)=>{
   
            if(err){ return error_response(400,res,err) }

            if(!work){ return custom_error_response(400,res,"Obra no encontrada")}
    
            if(req.body.name){
                if(!unique_with_name(work.folder.works,req.body.name)){ return custom_error_response(400,res,"Ese nombre ya existe")}
            }

            if(req.body.name){ work.name = req.body.name }
            if(req.body.description){ work.description = req.body.description }
    
            if(req.file != undefined)
            {
                const result = await cloudinary.v2.uploader.upload(req.file.path)
                console.log('\nImagen Subida a cloudinary')
    
                //Logica para borrar imagen de cloudinary si el user.img_public_id existe
                if(work.img_public_id != null) { await cloudinary.v2.uploader.destroy(work.img_public_id); console.log('Borrada imagen de cloudinary')}
                
                //cambiar parametros
                work.img_url = result.url
                work.img_public_id = result.public_id
            }

            if(req.body.private != undefined)
            {
                //Privado o Público
                if(!req.body.private) // Quiere ser publico
                {
                    if(work.private) // Es privado
                    { 
                        work.private_viewers = new Array(0);
                        work.private = req.body.private 
                    }
                }
                else // Quiere ser privado
                {
                    if(work.private) // Es privado
                    {
                        if(!duplicateValuesInTwoArray(work.private_viewers,req.body.private_viewers))
                        {
                            return custom_error_response(400,res,"Existen espectadores privados duplicados en la petición")
                        }
                        fillExistingArray(work.private_viewers,req.body.private_viewers)
                    }
                    else // Es publico
                    {
                        fillExistingArray(work.private_viewers,req.body.private_viewers)
                        work.private = req.body.private
                    }
                }
            }

            //Tags
            if(req.body.tag){
                if(!duplicateValuesInTwoArray(work.tag,req.body.tag)){ 
                    return custom_error_response(400,res,"Existen tags duplicados en la petición")
                }
                fillExistingArray(work.tag,req.body.tag)
            }
            
            work.save(async (err)=>{
                if (err) { return error_response(400, res, err)}
    
                if(req.file != undefined) { await fs.unlink(req.file.path); console.log('Imagen borrada de backend')}    
    
                custom_response(res, "Obra actualizada con éxito")
            })
        })
    })
    
}

module.exports={
    updateWork
}