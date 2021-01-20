const Comentary=require('../../models/comentary')
const Folder=require('../../models/work_folder')
const Work=require('../../models/work')
const WorkStats=require('../../models/work_stats')
const User=require('../../models/user')

const { 
    custom_response,
    error_response,
    custom_error_response
} = require('../../utils/utils')

let createComentary=(req,res)=>{

    let nick_name=req.params.nick_name
    let work_name=req.params.work_name
    let work_folder=req.params.work_folder
    
    User.findOne({nick_name: nick_name})
    .exec((err,user)=>{

        if(err){ return error_response(400, res, err) }
        if(!user){ return custom_error_response(400, res, "Usuario no encontrado") }

        Folder.findOne({name: work_folder,owner: user._id})
        .exec((err,folder)=>{

            if(err){ return error_response(400, res, err) }
            if(!folder){ return custom_error_response(400, res, "Folder no encontrado en el usuario") }

            Work.findOne({name: work_name,folder: folder._id,owner:user._id})
            .exec((err,work)=>{

                if(err){ return error_response(400, res, err) }
                if(!work){ return custom_error_response(400, res,"Obra no encontrada en el folder del usuario") }

                let workId=work._id

                WorkStats.findOne({work: work._id})
                .exec((err,stats)=>{

                    if(err){ return error_response(400, res, err) }
                    if(!stats){return custom_error_response(500,res,"Stats no existen")}
                    let comentary=new Comentary({
                        owner: req.user._id,
                        text: req.body.text,
                        creation_Date: new Date(), 
                        work: workId
                    })

                    comentary.save((err,comentaryDB)=>{
                        if(err){ return error_response(400, res, err) }
                        stats.comentaries.push(comentaryDB)
                        stats.save((err,_)=>{
                            if(err){ return error_response(400, res, err) }
                            custom_response(res,"Comentario subido correctamente")
                        })
                    })
                })
            })
        })
    })
}

module.exports={
    createComentary
}