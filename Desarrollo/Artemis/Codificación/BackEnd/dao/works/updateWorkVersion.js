const WorkVersion=require('../../models/work_version')
const Folder=require('../../models/work_folder')
const Work=require('../../models/work')
const { 
    custom_response,
    error_response,
    custom_error_response,
    unique_with_name 
} = require('../../utils/utils')

let updateWorkVersion=(req,res)=>{

    let nameWork=req.query.work_name
    let nameFolder=req.query.work_folder

    Folder.findOne({name:nameFolder})
    .exec((err,folder)=>{

        if(err){ return error_response(400, res, err) }

        if(!folder){ return custom_error_response(400, res, "Folder no encontrado") }

        Work.findOne({name:nameWork, folder: folder._id})
        .populate('past_versions')
        .exec((err,work)=>{

            if(err){ return error_response(400, res, err) }

            if(!work){ return custom_error_response(400, res, "Obra no encontrada en el folder") }

            let lastVersion=work.current_version
            work.past_versions.push(lastVersion)

            if(!unique_with_name(work.past_versions,req.body.version_name)){return custom_error_response(400, res, "Nombre de la version ya existe")}

            //Logica Cloudinary

            let version=new WorkVersion({
                name: req.body.version_name,
                created_date: new Date(),
                file: req.files.file.name,
                work: work._id
            })

            version.save((err,versionDB)=>{
                if(err){ return error_response(400, res, err) }
                work.current_version=versionDB._id
                work.save((err,_)=>{
                    if(err){ return error_response(400, res, err) }
                    custom_response(res,"Version de la obra actualizada con exito")
                })
            })

        })
    })
}

module.exports={
    updateWorkVersion
}