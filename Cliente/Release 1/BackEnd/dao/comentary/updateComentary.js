const Comentary=require('../../models/comentary')
const User=require('../../models/user')
const {error_response,custom_error_response,custom_response}=require('../../utils/utils')

let updateComentary=(req,res)=>{

    let comentaryId=req.query.comentary_id
    
    User.findById(req.user._id)
    .exec((err,user)=>{

        if(err){ return error_response(400,res,err)}
        if(!user){return custom_error_response(400,res,"No se encontro el usuario")}

        Comentary.findOne({_id:comentaryId,owner: user._id})
        .exec((err,comentary)=>{

            if(err){ return error_response(400,res,err)}

            if(!comentary){return custom_error_response(400,res,"No se encontro el comentario en el usuario")}

            if(comentary.text===req.body.text){
                return custom_error_response(400,res,"Es el mismo texto")
            }

            comentary.text=req.body.text
            comentary.edit_Date=new Date()

            comentary.save((err,_)=>{
                if(err){ return error_response(400,res,err)}
                custom_response(res,"Comentario actualizado")
            })

        })
    })
}

module.exports={updateComentary}