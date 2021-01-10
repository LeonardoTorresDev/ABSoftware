const Work=require('../../models/work')
const underscore = require("underscore")

const {
    error_response, 
    custom_error_response,
    custom_response,
    unique_with_name,
    fillExistingArray,
    duplicateValuesInTwoArray,
    toBoolean
}=require('../../utils/utils')

let updateWork=(req,res)=>{

    let nameWork=req.query.work_name

    Work.findOne({name: nameWork})
    .populate('folder')
    .exec((err,work)=>{

        if(err){ return error_response(400,res,err) }

        if(!work){ return custom_error_response(400,res,"Obra no encontrada")}

        if(req.body.name){
            if(!unique_with_name(work.folder.works,req.body.name)){ return custom_error_response(400,res,"Ese nombre ya existe")}
        }

        let update=underscore.pick(req.body,[
            "name",
            "description",
            "private"
        ])

        //Aplicar logica de cloudinary
        update.img_url=req.body.img_url

        let priv=true

        if(!update.private){
            priv=work.private
        }
        else{
            priv=toBoolean(update.private)
        }

        if(priv && req.body.private_viewers){
            if(!duplicateValuesInTwoArray(work.private_viewers,req.body.private_viewers)){
                 return custom_error_response(400,res,"Existen usuarios duplicados en la petición")
            }
            fillExistingArray(work.private_viewers,req.body.private_viewers)
        }

        if(req.body.tag){
            if(!duplicateValuesInTwoArray(work.tag,req.body.tag)){ 
                return custom_error_response(400,res,"Existen tags duplicados en la petición")
            }
            fillExistingArray(work.tag,req.body.tag)
        }
        
        update.private_viewers=work.private_viewers
        update.tag=work.tag

        Work.findByIdAndUpdate(work._id,update,(err,_)=>{
            if(err){ return error_response(400,res,err) }
            custom_response(res,"Trabajo actualizado con éxito")
        })
    })
}

module.exports={
    updateWork
}