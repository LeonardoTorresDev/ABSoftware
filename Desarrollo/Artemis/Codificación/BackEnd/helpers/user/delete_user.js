const User=require('../../models/user')
const {delete_folders_h} = require('../folders/delete_folders_h')

const {error_response, 
    custom_error_response, 
    custom_response,
    destroyCookieWhenLogged
}=require('../../utils/utils')

function delete_user(id, req, res)
{
    delete_folders_h(id, res)

    User.deleteOne({_id: id},(err,deletedUser)=>{

        if(err){return error_response(500,res,err)}

        if(!deletedUser){return custom_error_response(500,res,"Usuario no encontrado")}

        destroyCookieWhenLogged(req,res)

        custom_response(res,"Usuario borrado exitosamente")

    })
    
}

module.exports = {delete_user}