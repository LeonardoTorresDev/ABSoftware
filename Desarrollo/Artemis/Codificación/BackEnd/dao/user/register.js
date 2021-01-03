const User=require('../../models/user')

const bcrypt=require('bcrypt')

let saveUser=(req,res)=>{
    
    let body=req.body

    let user=new User({
        artistic_name: body.artistic_name,
        nick_name: body.nick_name,
        email: body.email,
        password: bcrypt.hashSync(body.password,10),
    })

    user.save((err,userDB)=>{
        if(err){
            return res.status(400).json({
                ok: false,
                err
            })
        }
        res.json({
            ok:true,
            user:userDB
        })
    })
}


module.exports={
    saveUser
}