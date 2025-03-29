
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
const auth = (req, res, next) => {
   
    const token = req.cookies.accessToken || req?.headers?.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            message: "Access Denied",
            error: true,
            success:false
        })
    }
    try {
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        if (!verified) {
            return res.status(401).json({
                message: "Invalid authentication",
                error: true,
                success:false
            })
            
        };
        req.userId = verified.id;
        next();
    } catch (error) {
        return res.status(400).json({
            message: "Invalid Token",
            error: true,
            success:false
        })
    }
}

export default auth;