const User=require('../../models/user')
const Folder=require('../../models/work_folder')

const {error_response, 
    custom_error_response, 
    custom_response,
    destroyCookieWhenLogged
}=require('../../utils/utils')

let deleteUser=(req,res)=>{

    let id=req.user._id

    User.deleteOne({_id: id},(err,deletedUser)=>{

        if(err){return error_response(500,res,err)}

        if(!deletedUser){return custom_error_response(500,res,"Usuario no encontrado")}

        destroyCookieWhenLogged(req,res)

        custom_response(res,"Usuario borrado exitosamente")
    })

}

module.exports={
    deleteUser
}