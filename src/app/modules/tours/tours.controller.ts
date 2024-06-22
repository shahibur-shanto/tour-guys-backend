import { NextFunction, Request, Response } from "express";
import { createToursToDB } from "./tours.service";
import { v2 as cloudinary } from "cloudinary";
import { UploadedFile } from "express-fileupload";
require("dotenv").config();

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const createTours = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	console.log({
		cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
		api_key: process.env.CLOUDINARY_API_KEY,
		api_secret: process.env.CLOUDINARY_API_SECRET,
	});
	const file = Array.isArray(req.files.photo)
		? (req.files.photo[0] as UploadedFile)
		: (req.files.photo as UploadedFile);
	const result = await cloudinary.uploader.upload(file.tempFilePath);
	const tourData = JSON.parse(req.body.data);
	const data = {
		...tourData,
		photo: result.secure_url, // Add the Cloudinary URL to your payload
	};
	const tours = await createToursToDB(data);
	res.status(200).json({
		status: "success",
		data: tours,
	});
};
