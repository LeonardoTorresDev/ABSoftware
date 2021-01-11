
function error_response(code, res, err)
{
    return res.status(code).json({
        ok: false,
        err
    })
}

function custom_error_response(code, res, text)
{
    return res.status(code).json({
        ok:false,
        error: text
    })
}

function custom_response(res, text)
{
    return res.json({
        ok:true,
        msg: text
    })
}

function custom_response_user(res,text,user){
    return res.json({
        ok:true,
        msg: text,
        user: user
    })
}

function unique_with_name(array, valuetofind)
{
    let unique = true;
    for(i=0;i<array.length && unique;i++) {
        if(array[i].name == valuetofind) {
            unique = false;
        }
    }
    return unique;
}

function destroyCookieWhenLogged(req,res){
    if(req.cookies.jwt){
        return res.cookie('jwt','',{maxAge: 1})
    }
}

function duplicateValuesInTwoArray(arrayDB,arrayPOST){

    arraySplitted=arrayPOST.split(",")
    const evaluateArray=arrayDB.concat(arraySplitted)

    let result = evaluateArray.filter((item,index)=>{
        return evaluateArray.indexOf(item) === index;
    })

    if(result.length!=evaluateArray.length){
        return false
    }else{
        return true
    }  
}

function unique(array, valuetofind)
{
    let unique = true;
    for(i=0;i<array.length && unique;i++) {
        if(array[i]._id == valuetofind) {
            unique = false;
        }
    }
    return unique;
}

function toBoolean(value){
    if(value==="false"){
        value=""
    }
    return value
}

function fillExistingArray(arrayToFill,addArray){
    array=addArray.split(",")
    for(let i=0;i<array.length;i++){
        arrayToFill.push(array[i])
    }
}

module.exports={
    error_response, 
    custom_error_response, 
    custom_response, 
    custom_response_user,
    unique_with_name,
    unique,
    destroyCookieWhenLogged,
    fillExistingArray,
    duplicateValuesInTwoArray,
    toBoolean
}