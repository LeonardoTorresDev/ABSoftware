const { custom_response } = require("../../utils/utils")
const Work= require('../../models/work')
const Stats = require('../../models/work_stats')
const Folder=require('../../models/work_folder')
const Version = require('../../models/work_version')
const Commentary =  require('../../models/comentary')

function delete_work_h(req, res)
{
    Folder.findOne({name: req.query.folder_name})
    .exec((err, folder)=>
    {
        if (err) { error_response(500, res, err) }

        if(!folder) { custom_response(res, "Folder no encontrado")}

        Work.findOne({folder: folder._id, name: req.query.work_name})
        .exec((err, work)=>
        {
            if (err) { error_response(500, res, err) }

            if(!work) { custom_response(res, "Obra no encontrada")}

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

            if(work){ work.remove() }
        })
    })
}

module.exports = {delete_work_h}