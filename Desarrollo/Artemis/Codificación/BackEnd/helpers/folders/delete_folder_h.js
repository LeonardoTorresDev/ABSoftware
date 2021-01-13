const {error_response, custom_response}=require('../../utils/utils')
const Work= require('../../models/work')
const Stats = require('../../models/work_stats')
const Folder=require('../../models/work_folder')
const Version = require('../../models/work_version')
const Commentary =  require('../../models/comentary')

function delete_folder_h(owner_id, folder_name, res)
{
    //Busco folder
    Folder.findOne({name: folder_name , owner: owner_id})
    .exec((err, folder)=>{
        if (err) { error_response(500, res, err) }

        if(!folder) { custom_response(res, "Folder no encontrado") }
        //Busco sus obras
        Work.find({folder: folder._id})
        .exec((err, works)=>{
            if (err) { error_response(500, res, err) }

            //Por cada obra..
            works.forEach(work => {
                //Busco sus stats
                Stats.findOne({work: work._id})
                .exec((err, stats)=>{
                    if (err) { error_response(500, res, err) }

                    //Busco los comentarios
                    Commentary.find({work: work._id})
                    .exec((err, commentaries)=>{
                        if (err) { error_response(500, res, err) }

                        if(commentaries) { 
                            commentaries.forEach(commentary => {
                                commentary.remove() 
                            });
                        }
                    })

                    if(stats) { stats.remove() }
                })

                //Busco sus versiones
                Version.find({work: work._id})
                .exec((err, versions)=>{
                    if (err) { error_response(500, res, err) }

                    if(versions) { 
                        versions.forEach(version => {
                            version.remove()
                        });
                    }
                })
            })
            if(works){
                works.forEach(work => {
                    work.remove()
                }); 
            }
        })

        if(folder) { folder.remove() }
    })
}

module.exports = {delete_folder_h}