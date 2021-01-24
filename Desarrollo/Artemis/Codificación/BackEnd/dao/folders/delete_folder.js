const {delete_folder_h} =  require('../../helpers/folders/delete_folder_h')
const {custom_response}=require('../../utils/utils')

function delete_folder(req, res){

    delete_folder_h(req.user._id, req.query.folder_name, res)
}

module.exports={delete_folder}