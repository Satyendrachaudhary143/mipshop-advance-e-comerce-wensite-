import multer from "multer";
import fs from "fs";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = "./public/temp";
        
      return  cb(null, dir);
    },
    filename: (req, file, cb) => {
        
      return  cb(null, file.fieldname + '_' + Date.now() + file.originalname);
    },
});


 const upload = multer({ storage })

 export default upload;