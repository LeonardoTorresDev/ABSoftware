const {custom_response}=require('../../utils/utils')

let logout=(req,res)=>{
    console.log(req.user)
    res.cookie('jwt','',{maxAge: 1})
    custom_response(res,"Cierre de sesión exitoso")
}

module.exports={
    logout
}