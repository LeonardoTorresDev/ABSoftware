const User=require('../../models/user');
const Folder=require('../../models/work_folder');
const Work=require('../../models/work')
const {error_response, custom_error_response}=require('../../utils/utils')


function get_work(req, res){
    User.findOne({nick_name: req.query.nick_name})
    .exec(function (err, user){

        if(err){ return error_response(400, res, err) }

        if(user==null){ return custom_error_response(400, res, "Usuario no encontrado") }

        Folder.findOne({name: req.query.folder_name, owner: user._id})
        .exec(function (err, folder){
            if(err){ return error_response(400, res, err) }

            if(folder==null){ return custom_error_response(400, res, "Folder no encontrado") }

            
        })
    })
}

module.exports={get_work}