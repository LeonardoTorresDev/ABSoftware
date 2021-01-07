const Work=require('../../models/work')
const {error_response}=require('../../utils/utils')

let create_work=(req, res)=>{

    let body = req.body

    let work=new Work({
        name: body.name,
        tag: body.tag,
        owner_id: req.user._id,
        img: body.img,
        stats_id: body.stats_id,
        private: body.private,
        collaborative: body.collaborative,
        collabs: body.collabs,
        folder : body.folder,
        current_version: body.current_version
    })

    work.save((err,userDB)=>{
        if(err){
            return error_response(400,res,err)
        } 
        res.send("Creada nueva obra para el usuario: " + req.user.nick_name)     
    })
}

module.exports={create_work}
