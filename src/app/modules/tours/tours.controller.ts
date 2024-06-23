import { NextFunction, Request, Response } from "express";
import { createToursToDB } from "./tours.service";
import { UploadApiResponse, v2 as cloudinary } from "cloudinary";
// import { UploadedFile } from "express-fileupload";
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
	try {
		if (!req.file) {
			return res.status(400).json({ error: "No image file uploaded" });
		}

		const uploadResult: UploadApiResponse = await new Promise((resolve, reject) => {
			const uploadStream = cloudinary.uploader.upload_stream(
				{ resource_type: "image" },
				(error, result) => {
					if (error) {
						reject(error);
					} else {
						resolve(result as UploadApiResponse);
					}
				}
			);

			uploadStream.end(req.file.buffer);
		});

		const tourData = JSON.parse(req.body.data);
		const data = {
			...tourData,
			photo: uploadResult.secure_url,
		};
		const tours = await createToursToDB(data);

		res.status(200).json({
			status: "success",
			data: tours,
		});
	} catch (error) {
		res.status(500).json({ error: "Failed to create tour" });
	}
};
