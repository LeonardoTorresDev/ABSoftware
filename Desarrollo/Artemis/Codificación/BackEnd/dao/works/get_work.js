const Work=require('../../models/work');

function get_work(req, res){
    Work.find({
        owner_id: req.query.owner_id,
        name: req.query.name
    })
    .exec((err,works)=>{

        if(err){
            return res.status(500).json({
                ok:false,
                err
            });
        }

        res.json({
            works
        });

    });
}

module.exports={get_work}