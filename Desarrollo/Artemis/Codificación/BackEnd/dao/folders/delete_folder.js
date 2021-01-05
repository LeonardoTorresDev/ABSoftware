const User=require('../../models/user');
const Folder=require('../../models/work_folder');
const {error_response, custom_error_response, custom_response}=require('../../utils/utils')

function delete_folder(req, res){

    User.findOne({nick_name: req.user.nick_name})
    .exec(function (err, user){

        if(err){ return error_response(400, res, err) }

        if(user==null){ return custom_error_response(400, res, "Usuario no encontrado") }

        Folder.findOneAndDelete({name: req.query.folder_name})
        .exec(function(err, folder){

            if(err){ return error_response(400, res, err) }

            if(folder==null){ return custom_error_response(400, res, "Folder no encontrado") }

            user.folders.splice(user.folders.indexOf(folder._id), 1)

            user.save((err)=>{
                if(err){ return error_response(400, res, err) }

                return custom_response(res, "Folder borrado con exito")
            })
        })    
    })
}

module.exports={delete_folder}