const Work=require('../../models/work')
const WorkStats=require('../../models/work_stats')
const Folder=require('../../models/work_folder')
const User=require('../../models/user')

const {
    custom_error_response,
    error_response
}=require('../../utils/utils')

const {setOptionAndChange}=require('../../utils/setOptionAndChange')
const {setOption}=require('../../utils/setOption')

let updateWorkStats=(req,res)=>{

    let option=req.query.option
    let work_name=req.query.work_name
    let nick_name=req.query.nick_name
    let folder_name=req.query.folder_name

    let validOptions=[
        "like",
        "dislike",
        "report"
    ]

    if(!validOptions.includes(option)){
        return custom_error_response(400,res,"Opcion no valida")
    }

    User.findOne({nick_name: nick_name})
    .exec((err,user)=>{
        if(err){ return error_response(400, res, err) }
        if(!user){ return custom_error_response(400, res, "Usuario no encontrado") }
        Folder.findOne({name: folder_name, owner: user._id})
        .exec((err,folder)=>{

            if(err){ return error_response(400, res, err) }

            if(!folder){ return custom_error_response(400, res, "Folder no encontrado en el usuario") }

            Work.findOne({name:work_name,folder:folder._id,owner: user._id})
            .exec((err,work)=>{

                if(err){return error_response(400,res,err)}

                if(!work){ return custom_error_response(400,res,"Obra no encontrada en el folder del usuario")}

                let statsId=work.stats

                WorkStats.findById(statsId)
                    .exec((err,stats)=>{ 
                        if(err){return error_response(400,res,err)}    
                        switch(option){                       
                            case 'like':
                                let mensajesLike=["Like!!","Cambiado el dislike por un like","Quitando el like"]
                                return setOptionAndChange(
                                    res,
                                    'like',
                                    stats.likes,
                                    stats.usersThatLiked,
                                    stats.dislikes,
                                    stats.usersThatDisliked,
                                    stats,
                                    req.user._id,
                                    mensajesLike
                                )                   
                            case 'dislike':
                                let mensajesDislike=["Dislike!!","Cambiado el like por un dislike","Quitando el dislike"]
                                return setOptionAndChange(
                                    res,
                                    'dislike',
                                    stats.dislikes,
                                    stats.usersThatDisliked,
                                    stats.likes,
                                    stats.usersThatLiked,
                                    stats,
                                    req.user._id,
                                    mensajesDislike
                                )
                            case 'report':
                                let mensajesReport=["Report!!","Quitando el Report"]
                                return setOption(
                                    res,
                                    stats.reports,
                                    stats.usersReport,
                                    stats,
                                    req.user._id,
                                    mensajesReport
                                )
                            default:
                                return custom_error_response(400,res,"No es una opcion valida")         
                        }
                    }) 
            })
        })
    })
}

module.exports={
    updateWorkStats
}
