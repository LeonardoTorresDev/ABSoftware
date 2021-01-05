
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

function unique_with_name(array, valuetofind)
{
    var unique = true;
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

module.exports={
    error_response, 
    custom_error_response, 
    custom_response, 
    unique_with_name,
    destroyCookieWhenLogged
}