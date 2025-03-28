import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    orderid: {
        type: String,
        required: [true, "Please enter order id"],
        unique: true,
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",  
    },
    product_datails: {
      
        type: String,
        image: Array,
        required: [true, "Please enter product details"],
    },
    paymentId: {
        type: String,
        default: "",
        
    },
    payment_status: {
        type: String,
        default: ""
    },
    delivery_address: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Address",
        default: ""
    },
    subTotalAmt: {
        type: Number,
        default:0
    },
    totalAmt: {
        type: Number,
      default: 0 
    },
    invoice_receipt: {
        type: String,
        default:""
    },
},{timestamps:true});
const Order = mongoose.model("Order", orderSchema);
export default Order;