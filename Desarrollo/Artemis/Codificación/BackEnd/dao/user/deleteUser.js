const User=require('../../models/user')
const Folder=require('../../models/work_folder')

const {error_response, 
    custom_error_response, 
    custom_response,
    destroyCookieWhenLogged
}=require('../../utils/utils')

let deleteUser=(req,res)=>{

    custom_response(res,"DELETE")

}

module.exports={
    deleteUser
}