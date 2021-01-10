const Work=require('../../models/work')
const WorkStats=require('../../models/work_stats')
const Folder=require('../../models/work_folder')

const {
    custom_error_response,
    error_response
}=require('../../utils/utils')

const {setOptionAndChange}=require('../../utils/setOptionAndChange')
const {setOption}=require('../../utils/setOption')

let updateWorkStats=(req,res)=>{

    let option=req.query.option
    let nameWork=req.query.work_name
    let nameFolder=req.query.work_folder

    let validOptions=[
        "like",
        "dislike",
        "report"
    ]

    if(!validOptions.includes(option)){
        return custom_error_response(400,res,"Opcion no valida")
    }

    Folder.findOne({name:nameFolder})
    .exec((err,folder)=>{

        if(err){ return error_response(400, res, err) }

        if(!folder){ return custom_error_response(400, res, "Folder no encontrado") }

        Work.findOne({name:nameWork,folder:folder._id})
        .exec((err,work)=>{

            if(err){return error_response(400,res,err)}

            if(!work){ return custom_error_response(400,res,"Obra no encontrada en el folder")}

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
}

module.exports={
    updateWorkStats
}
