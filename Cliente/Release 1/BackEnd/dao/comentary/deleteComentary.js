const Comentary=require('../../models/comentary')
const WorkStats=require('../../models/work_stats')
const User=require('../../models/user')
const {error_response,custom_error_response,custom_response}=require('../../utils/utils')

let deleteComentary=(req,res)=>{
    
    let comentaryId=req.query.comentary_id

    User.findById(req.user._id)
    .exec((err,user)=>{

        if(err){ return error_response(400,res,err)}
        if(!user){return custom_error_response(400,res,"No se encontro el usuario")}

        Comentary.findOne({_id:comentaryId,owner: user._id})
        .exec((err,comentary)=>{

            if(err){ return error_response(400,res,err)}
            if(!comentary){return custom_error_response(400,res,"No se encontro el comentario en el usuario")}

            WorkStats.findOne({work: comentary.work})
            .exec((err,stats)=>{

                if(err){ return error_response(400,res,err)}
                if(!stats){return custom_error_response(400,res,"No se encontraron stats para el comentario")}

                stats.comentaries.splice(stats.comentaries.indexOf(comentary._id),1)

                stats.save((err,_)=>{
                    if(err){ return error_response(400,res,err)}
                    
                    comentary.remove({_id:comentary._id},(err,_)=>{
                        if(err){ return error_response(400,res,err)}
                        custom_response(res,"Comentario borrado")
                    })
                })

            })

        })
    })
}

module.exports={deleteComentary}