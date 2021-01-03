let logout=(req,res)=>{
    res.cookie('jwt','',{maxAge: 1})
    res.json({
        ok: true,
        message: "User logout"
    })
}

module.exports={
    logout
}