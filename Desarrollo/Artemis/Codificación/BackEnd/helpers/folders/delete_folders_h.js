const {error_response}=require('../../utils/utils')
const Work= require('../../models/work')
const Stats = require('../../models/work_stats')
const Folder=require('../../models/work_folder')
const Version = require('../../models/work_version')
const Commentary =  require('../../models/comentary')

function delete_folders_h(id , res)
{
    //Busco folders
    Folder.find({owner: id})
    .exec((err, folders)=>{
        if (err) { error_response(500, res, err) }

        //Por cada folder...
        folders.forEach(folder => {
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
        })

        if(folders) {
            folders.forEach(folder => {
                folder.remove() 
            })   
        }
    })
}

module.exports = {delete_folders_h}