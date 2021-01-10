const multer = require('multer')
const path = require('path');

function multer_config(app)
{
    const storage = multer.diskStorage({
        destination: path.join(__dirname, 'public/uploads'),
        filename: (req, file, callback) =>{
            callback(null, new Date().getTime() + path.extname(file.originalname));
        }
    })
    app.use(multer({storage}).single('image'));
}

module.exports={multer_config}