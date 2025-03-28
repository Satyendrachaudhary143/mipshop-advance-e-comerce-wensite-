import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


if (!process.env.URL) {
    console.log("Please set your mongodb URL");
    process.exit(1);
    
}

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.URL);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB", error);
        process.exit(1);
    }
};
export default connectDB;