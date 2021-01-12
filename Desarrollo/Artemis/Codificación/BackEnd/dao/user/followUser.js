const User=require('../../models/user')
const {
    custom_response,
    error_response,
    custom_error_response
}=require('../../utils/utils')

let followUser=(req,res)=>{

    let nick_name=req.params.nick_name

    User.findOne({nick_name: nick_name})
    .exec((err,userToFollow)=>{

        if(err){ return error_response(400,res,err)}
        if(!userToFollow){ return custom_error_response(400,res,"Usuario a seguir no encontrado")}

        if(userToFollow.nick_name===req.user.nick_name){
            return custom_error_response(400,res,"No te puedes seguir a ti mismo")
        }

        User.findOne({nick_name: req.user.nick_name})
        .exec((err,userFollowing)=>{

            if(err){ return error_response(400,res,err)}
            if(!userFollowing){ return custom_error_response(400,res,"Usuario que sigue no encontrado")}

            let answer="Usuario "+userToFollow.nick_name+" seguido con éxito"

            if(userToFollow.followers.includes(userFollowing._id)){
                userToFollow.followers.splice(userToFollow.followers.indexOf(userFollowing._id),1)
                userFollowing.following.splice(userFollowing.following.indexOf(userToFollow._id),1)
                answer="Dejando de seguir al usuario "+userToFollow.nick_name
            }
            else{
                userToFollow.followers.push(userFollowing._id)
                userFollowing.following.push(userToFollow._id)
            }

            userToFollow.save((err,_)=>{
                if(err){ return error_response(400,res,err)}
                userFollowing.save((err,_)=>{
                    if(err){ return error_response(400,res,err)}
                     custom_response(res,answer)
                })
            })
        })
    })
}

module.exports={
    followUser
}