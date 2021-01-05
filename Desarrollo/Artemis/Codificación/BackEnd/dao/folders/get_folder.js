const User=require('../../models/user');
const Folder=require('../../models/work_folder');
const {error_response, custom_error_response}=require('../../utils/utils')

function get_folder(req, res){

    User.findOne({nick_name: req.user.nick_name})
    .exec(function (err, user){

        if(err){ return error_response(400, res, err) }

        if(user==null){ return custom_error_response(400, res, "Usuario no encontrado") }

        Folder.findOne({name: req.query.folder_name, owner: user._id})
        .exec(function (err, folder){
            if(err){ return error_response(400, res, err) }

            if(folder==null){ return custom_error_response(400, res, "Folder no encontrado") }

            res.send(folder)
        })
    })
}

module.exports={get_folder}