const User=require('../../models/user');
const Folder=require('../../models/work_folder');
const Work=require('../../models/work');
const Stats=require('../../models/work_stats')
const Version=require('../../models/work_version')
const {error_response, custom_error_response,unique_with_name}=require('../../utils/utils')

function create_work(req, res){

    User.findById(req.user._id)
    .exec((err, user)=>{

        if(err){ return error_response(400, res, err) }

        if(user==null){ return custom_error_response(400, res, "Usuario no encontrado") }

        //Encontró el usuario

        Folder.findOne({name: req.params.folder_name, owner: user._id})
        .exec((err, folder)=>{

            if(err){ return error_response(400, res, err) }

            if(folder==null){ return custom_error_response(400, res, "Folder no encontrado") }

            //Encontró el folder

            if(!unique_with_name(folder.works, req.body.name)) { return custom_error_response(400, res, "Obra ya existe") }

            let stats=new Stats({
                likes: 0,
                dislikes: 0,
                reports: 0
            })

            console.log(req.files.name)

           

            let version=new Version({
                name: req.body.name,
                created_date: new Date(),
                file: req.files.file
            })

            stats._id=1
            version._id=2

            let work=new Work({
                name: req.body.name,
                tag: req.body.tag,
                owner_id: req.user._id,
                img: req.body.img,
                stats: stats._id,
                private: req.body.private,
                collaborative: req.body.collaborative,
                collabs: req.body.collabs_ids,
                folder: folder._id,
                current_version: version._id
            });

            stats.work = work._id
            version.work = work._id

            console.log(stats)
            console.log(version)
            console.log(work)

             res.json({
                ok:true
            })
    
        })
    })
    
}

module.exports={create_work}
