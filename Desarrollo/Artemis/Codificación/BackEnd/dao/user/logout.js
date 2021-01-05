const {custom_response}=require('../../utils/utils')

let logout=(_,res)=>{
    res.cookie('jwt','',{maxAge: 1})
    custom_response(res,"User logout succesfully done")
}

module.exports={
    logout
}