import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './database/db.js';
import cloudinary from 'cloudinary';
import cookieParser from 'cookie-parser';
import path from "path";

dotenv.config();

const app = express();
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, "/frontend/dist")));

// app.get(/.*/, (req, res) => {
//     res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    connectDB();
});