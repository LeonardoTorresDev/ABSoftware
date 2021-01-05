const Work=require('../../models/work');

function create_work(req, res){
    let body = req.body

    //user_id, work_name

    //current version

    let work=new Work({
        name: body.name,
        tag: body.tag,
        owner_id: req.query.user_id,
        img: body.img,
        stats_id: body.stats_id,
        private: body.private,
        collaborative: body.collaborative,
        collabs_ids: body.collabs_ids,
        folder_id : body.folder_id,
        current_version_id: body.current_version_id
    });

    work.save((err,userDB)=>{
        if(err){
            return res.status(400).json({
                ok: false,
                err
            });
        } 
        res.send("Creada nueva obra para el usuario con id: " + req.query.user_id)     
    });
}

module.exports={create_work}
