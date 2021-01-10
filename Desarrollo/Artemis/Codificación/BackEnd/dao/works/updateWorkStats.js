const Work=require('../../models/work')
const WorkStats=require('../../models/work_stats')
const {
    custom_error_response,
    error_response,
    custom_response,
    unique
}=require('../../utils/utils')

let updateWorkStats=(req,res)=>{

    let option=req.query.option
    let nameWork=req.params.work_name

    let validOptions=[
        "like",
        "dislike",
        "report"
    ]

    if(!validOptions.includes(option)){
        return custom_error_response(400,res,"Opcion no valida")
    }

    Work.findOne({name:nameWork})
    .exec((err,work)=>{
    
        if(err){return error_response(400,res,err)}

        if(!work){ return custom_error_response(400,res,"Obra no encontrada")}

        let statsId=work.stats

        WorkStats.findById(statsId)
            .exec((err,stats)=>{

                if(err){return error_response(400,res,err)}
                
                switch(option){
                    case 'like':

                        let respuestaLike="Like!!"

                        if(!unique(stats.usersThatDisliked,req.user._id)){
                            stats.usersThatDisliked.splice(stats.usersThatDisliked.indexOf(req.user._id),1)
                            stats.dislikes=stats.usersThatDisliked.length
                            respuestaLike="Cambiado el dislike por un like"
                        }

                        if(!unique(stats.usersThatLiked,req.user._id)){
                            stats.usersThatLiked.splice(stats.usersThatLiked.indexOf(req.user._id),1)
                            respuestaLike="Quitando el like"
                        }
                        else{
                            stats.usersThatLiked.push(req.user._id)
                        }
         
                        stats.likes=stats.usersThatLiked.length

                        stats.save((err,_)=>{
                            if(err){return error_response(400,res,err)}
                            custom_response(res,respuestaLike)
                        })
                        
                        break              
                    case 'dislike':

                        let respuestaDislike="Dislike!!"

                        if(!unique(stats.usersThatLiked,req.user._id)){
                            
                            stats.usersThatLiked.splice(stats.usersThatLiked.indexOf(req.user._id),1)
                            stats.likes=stats.usersThatLiked.length
                            respuestaDislike="Cambiado el like por un dislike"

                        }

                        if(!unique(stats.usersThatDisliked,req.user._id)){
  
                            stats.usersThatDisliked.splice(stats.usersThatDisliked.indexOf(req.user._id),1)

                            respuestaDislike="Quitando el dislike"
                        }
                        else{
                            stats.usersThatDisliked.push(req.user._id)
                        }
                           
                        stats.dislikes=stats.usersThatDisliked.length

                        stats.save((err,_)=>{
                            if(err){return error_response(400,res,err)}
                            custom_response(res,respuestaDislike)
                        })
                        break  
                    case 'report':

                        let respuestaReport="Report!!"

                        if(!unique(stats.usersReport,req.user._id)){
                            stats.usersReport.splice(stats.usersReport.indexOf(req.user._id),1)
                            respuestaReport="Quitando el Report"
                        }
                        else{
                            stats.usersReport.push(req.user._id)
                        }
                        
                        stats.reports=stats.usersReport.length
                        stats.save((err,_)=>{
                            if(err){return error_response(400,res,err)}
                            custom_response(res,respuestaReport)
                        })

                        break
                    default:
                        return custom_error_response(400,res,"No es una opcion valida")         
                }
            }) 
    })   
}

module.exports={
    updateWorkStats
}