const Work=require('../../models/work')
const WorkStats=require('../../models/work_stats')
const Folder=require('../../models/work_folder')
const {
    error_response, 
    custom_error_response
}=require('../../utils/utils')

let getWorkStats=(req,res)=>{
    let folder_name=req.query.folder_name
    let work_name=req.query.work_name
    Folder.findOne({owner: req.user._id, name: folder_name})
    .exec((err,folder)=>{
        if(err){ return error_response(400,res,err) }
        if(!folder){return custom_error_response(400,res,"Folder no encontrado en el usuario")}
        Work.findOne({owner: req.user._id,name: work_name,folder: folder._id})
        .exec((err,work)=>{
            if(err){ return error_response(400,res,err) }
            if(!work){return custom_error_response(400,res,"Trabajo no encontrado en el folder del usuario")}
            WorkStats.find({work: work._id})
            .exec((err,stats)=>{
                if(err){ return error_response(400,res,err) }
                if(!stats){return custom_error_response(400,res,"Stats no encontrados para el trabajo")}
                res.send(stats)
            })
        })
    })
}

module.exports={
    getWorkStats
}