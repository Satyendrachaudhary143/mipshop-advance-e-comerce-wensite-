import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const generateAccessToken = async(userId) => {
    
    const accessToken = jwt.sign({id: userId }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "30d" });
    return accessToken;
}
export default generateAccessToken;

