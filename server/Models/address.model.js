import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    address_line: {
        type: String,
        default: ""
    },
    city: {
        type: String,
        default: ""
    },
    state: {
        type: String,
        default: ""
    },
    pincode: {
        type: Number,
        default: null
    },
    country: {
        type: String,
        default: ""
    },
    mobile: {
        type: Number,
        default: null
    },
    status: {
        type: Boolean,
        default:true
    },

}, { timestamps: true });
const Address = mongoose.model("Address", addressSchema);
export default Address;