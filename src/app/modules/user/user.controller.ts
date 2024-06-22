import { NextFunction, Request, Response } from "express";
import {
	createUserToDB,
	deleteUserFromDB,
	getAllUsers,
	getUserById,
	searchQueryFromDB,
	searchUserFromDB,
	updateUserToDB,
} from "./user.service";
import { UserFilters } from "./user.interface";

export const createUser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const data = req.body;
	const user = await createUserToDB(data);
	res.status(200).json({
		status: "success",
		data: user,
	});
};

export const allUsers = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const users = await getAllUsers();
	res.status(200).json({
		status: "success",
		data: users,
	});
};

export const userById = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { id } = req.params;
	console.log(id);
	const userById = await getUserById(id);
	res.status(200).json({
		status: "success",
		data: userById,
	});
};

export const updateUser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { id } = req.params;
	const data = req.body;
	const user = await updateUserToDB(id, data);
	res.status(200).json({
		status: "success",
		data: user,
	});
};

export const deleteUser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { id } = req.params;
	const user = await deleteUserFromDB(id);
	res.status(200).json({
		status: "success",
		data: user,
	});
};

export const searchUser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const filters = req.query as unknown as UserFilters;
	const users = await searchUserFromDB(filters);
	res.status(200).json({
		status: "success",
		data: users,
	});
};


export const searchSingleQuery = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const filters = req.query as unknown as UserFilters;
	const users = await searchQueryFromDB(filters);
	res.status(200).json({
		status: "success",
		data: users,
	});
};