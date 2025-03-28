import express from 'express';
import cookieParser from 'cookie-parser';

import dotenv from 'dotenv';
import connectDB from './config/connectdb.js';
import router from './routes/users.route.js';
dotenv.config();

const app = express();  
app.use(cookieParser());
app.use(express.json());
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("Hello World");
});


app.use("/api/user", router);


connectDB();

app.listen(port, () => {
    console.log(`Server is running : http://localhost:${port}`);
});

