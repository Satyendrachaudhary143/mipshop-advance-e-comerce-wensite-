import User from "../Models/user.model.js"
import bcryptjs from "bcryptjs"
import generateAccessToken from "../utils/genrateAccessToken.js";
import gererateRefreshToken from "../utils/generateRefressAccessToken.js";

export const registerUser = async (req , res) => {
    
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "all field is required",
                success: false,
                error:true
            })
        }

        const user = await User.findOne({ email })
        if (user) {
            return res.json({
                message: "user all ready register",
                success: false,
                error:true
            })
        }

       
        const hashPasword = await bcryptjs.hash(password,10)
       const newUser= await User.create({
            name,
            email,
            password:hashPasword
       })
        // const subject = "Account Verification";
        // const html = `Click on the link to verify your account`;
     
        // const sendVerificationMail = await sendMail(
        //     email,
        //     subject,
        //     html
        //  ) 
        return res.status(200).json({
            message: "User register successfully",
            success: true,
            error: false,
            newUser

        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success:false,
       })
        
    }
}

export const loginUser = async (req , res) => {
    
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            message: "all field is required",
            success: false,
            error:true
        })
    }

    const userFind = await User.findOne({ email });
    if (!userFind) {
        return res.status(404).json({
            message: "user not found ",
            error: true,
            success:false
        })
    };
    if (userFind.status !== "active") {
        
        return res.status(400).json({
            message: "user suspended",
            error: true,
            success:false
        })
    };
    const checkpassword = await bcryptjs.compare(password, userFind.password);

    if (!checkpassword) {
        return res.status(400).json({
            message: "You enter wrong password",
            error: true,
            success:false
        })
    };

    const accessToken = await generateAccessToken(userFind._id);
    const refreshToken = await gererateRefreshToken(userFind._id);
    const updateUser = await User.findByIdAndUpdate(userFind?._id,{
        last_login_date : new Date()
    })
     res.cookie("userInfo",userFind._id, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 30 * 24 * 60 * 60 * 1000,
    })

    

    res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
         maxAge: 30 * 24 * 60 * 60 * 1000,
    });
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
        message: "login successfully",
        success: true,
        error: false,
        date: {
            accessToken,
            refreshToken  
        },
        userFind
    });





}
export const logoutUser = async (req, res) => { 
    try {

      const userid = req.cookies.userInfo;
        
        const removeRefreshToken = await User.findByIdAndUpdate(userid, {
            refresh_token: ""
        })

   return res.clearCookie("accessToken").clearCookie("refreshToken").json({
        message: "logout successfully",
        success: true,
       error: false,
        userid
    })
       

    } catch (error) {
        console.log("logout error:",error);
        
    }
}