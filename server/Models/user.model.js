import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
    },
    avatar: {
        type: String,
        default: ""
    },
    mobile: {
        type: Number,
        default: null
    },
    refresh_token: {
        type: String,
        default: ""
    },
    veryfy_email: {
        type: Boolean,
        default: false
    },
    last_login_date: {
        type: Date,
        default:""
    },
    status: {
        type: String,
        enum: ["active", "inactive", "suspended"],
        default: "active",
    },
    address_details: [
        {
       type:mongoose.Schema.Types.ObjectId,
       ref:"Address"
        }
    ],
    shopping_cart: [
        {
       type:mongoose.Schema.Types.ObjectId,
       ref:"CartProduct"
        }
    ],
    orderHistory: [
        {
       type:mongoose.Schema.Types.ObjectId,
       ref:"Order"
        }
    ],
    forgot_password_otp: {
        type: String,
        default: null
    },
    forgot_password_otp_expiry: {
        type: Date,
        default: ""
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",

    },





}, { timestamps: true });
const User = mongoose.model("User", userSchema);
export default User;