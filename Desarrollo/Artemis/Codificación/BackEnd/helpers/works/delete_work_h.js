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
        if (err) { return error_response(500, res, err) }

        if(!folder) { return custom_response(res, "Folder no encontrado")}

        Work.findOne({folder: folder._id, name: req.query.work_name})
        .exec((err, work)=>
        {
            if (err) { return error_response(500, res, err) }

            if(!work) { return custom_response(res, "Obra no encontrada")}

            //Busco sus stats
            Stats.findOne({work: work._id})
            .exec((err, stats)=>{
                if (err) { return error_response(500, res, err) }

                //Busco los comentarios
                Commentary.find({work: work._id})
                .exec((err, commentaries)=>{
                    if (err) { return error_response(500, res, err) }

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
                if (err) { return error_response(500, res, err) }

                if(versions) { 
                    versions.forEach(version => {
                        version.remove()
                    });
                }
            })

            if(work){ work.remove() }
            custom_response(res, "Obra borrada con exito")
        })
    })
}

module.exports = {delete_work_h}