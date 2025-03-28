import mongoose from "mongoose";
const CartProductSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    quantity: {
        type: Number,
        default: 1
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
},{timestamps:true});
const CartProduct = mongoose.model("CartProduct", CartProductSchema);
export default CartProduct;