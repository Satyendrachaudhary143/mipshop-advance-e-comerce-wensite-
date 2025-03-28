import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../Models/user.model.js";
dotenv.config();

const gererateRefreshToken = async (userId) => {
   const token= jwt.sign({ id:userId}, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "30d" });
    
    const updateRefressToken = await User.updateOne({ _id: userId }, { refresh_token: token });
    return token;
}
export default gererateRefreshToken;