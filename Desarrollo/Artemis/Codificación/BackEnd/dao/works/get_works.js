const Work=require('../../models/work');

function get_works(user_id, res){
    Work.find({
        owner_id: user_id
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

module.exports={get_works}