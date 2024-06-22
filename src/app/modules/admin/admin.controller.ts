import { Request, Response } from "express";
import { createAdminToDB } from "./admin.service";

export const createAdmin = async (
	req: Request,
	res: Response,
	next: NewableFunction
) => {
	const data = req.body;
	const admin = await createAdminToDB(data);
	res.status(200).json({
		status: "success",
		data: admin,
	});
};
