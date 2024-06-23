"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTours = void 0;
const tours_service_1 = require("./tours.service");
const cloudinary_1 = require("cloudinary");
// import { UploadedFile } from "express-fileupload";
require("dotenv").config();
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
const createTours = async (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No image file uploaded" });
        }
        const uploadResult = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary_1.v2.uploader.upload_stream({ resource_type: "image" }, (error, result) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            });
            uploadStream.end(req.file.buffer);
        });
        const tourData = JSON.parse(req.body.data);
        const data = {
            ...tourData,
            photo: uploadResult.secure_url,
        };
        const tours = await (0, tours_service_1.createToursToDB)(data);
        res.status(200).json({
            status: "success",
            data: tours,
        });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to create tour" });
    }
};
exports.createTours = createTours;
