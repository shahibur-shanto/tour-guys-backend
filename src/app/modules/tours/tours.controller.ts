import { NextFunction, Request, Response } from "express";
import { createToursToDB } from "./tours.service";
import { v2 as cloudinary } from "cloudinary";
import { UploadedFile } from "express-fileupload";

cloudinary.config({
	cloud_name: "dmam6uulx",
	api_key: "348146485332311",
	api_secret: "SDVeWiLR2isjvO9x_oVqmsnyu78",
});

export const createTours = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
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
