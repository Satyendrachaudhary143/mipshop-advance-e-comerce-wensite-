import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});
const uploadImage = async (file) => {
    try {
        if (!file) {
            return null;
            
        }
        const result = await cloudinary.uploader.upload(file, {folder: 'ecommerce',resource_type: 'auto'});
        return result;
    } catch (error) {
fs.unlinkSync(file);
        console.log(error);
    }
};

export default uploadImage;