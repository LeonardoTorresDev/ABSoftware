const Work=require('../../models/work')
const WorkVersion=require('../../models/work_version')
const Folder=require('../../models/work_folder')
const User=require('../../models/user')
const {
    error_response, 
    custom_error_response
}=require('../../utils/utils')

let getWorkVersion=(req,res)=>{
    let folder_name=req.query.folder_name
    let work_name=req.query.work_name
    let nick_name=req.query.nick_name
    
    User.findOne({nick_name: nick_name})
    .exec((err,user)=>{

        if(err){ return error_response(400,res,err) }
        if(!user){return custom_error_response(400,res,"Usuario no encontrado")}

        Folder.findOne({owner: user._id, name: folder_name})
        .exec((err,folder)=>{

            if(err){ return error_response(400,res,err) }
            if(!folder){return custom_error_response(400,res,"Folder no encontrado en el usuario")}

            Work.findOne({owner: user._id,name: work_name,folder: folder._id})
            .exec((err,work)=>{

                if(err){ return error_response(400,res,err) }
                if(!work){return custom_error_response(400,res,"Trabajo no encontrado en el folder del usuario")}

                WorkVersion.find({work: work._id})
                .exec((err,version)=>{

                    if(err){ return error_response(400,res,err) }
                    if(!version){return custom_error_response(400,res,"Version")}

                    res.send(version)

                })
            })
        })
    })    
}

module.exports={
    getWorkVersion
}