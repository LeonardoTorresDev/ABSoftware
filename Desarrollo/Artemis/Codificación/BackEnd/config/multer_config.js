const multer = require('multer')
const path = require('path');

const storage = multer.diskStorage({
    destination: path.join(path.join(__dirname, '/../'), 'public/uploads'),
    filename: (req, file, callback) =>{
        callback(null, new Date().getTime() + path.extname(file.originalname));
    }
})

function multer_files()
{
    const upload = multer({storage})
    return upload
}

module.exports={multer_files}