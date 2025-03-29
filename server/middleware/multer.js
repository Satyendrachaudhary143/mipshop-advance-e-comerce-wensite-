import multer from "multer";
import fs from "fs";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = "./public/temp";
        
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});


 const upload = multer({ storage })

 export default upload;