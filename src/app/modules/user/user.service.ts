import { UserFilters, UserQueryFilters } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload) => {
	const user = new User(payload);
	await user.save();
	return user;
};

export const getAllUsers = async () => {
	const users = await User.find();
	return users;
};

export const getUserById = async (id) => {
	const user = await User.findOne(
		{ email: id }
		/* 
		this is for what we show
		{
		 	name: 1,
		}
			*/
	);
	return user;
};

export const updateUserToDB = async (id, data) => {
	const user = await User.findOneAndUpdate(
		{ email: id },
		{ $set: data },
		{ new: true }
	);
	return user;
};

export const deleteUserFromDB = async (id) => {
	const user = await User.findOneAndDelete({
		email: id,
	});
	return user;
};

export const searchUserFromDB = async (filters: UserFilters) => {
	const query: any = { $or: [] };
	if (filters.name) {
		query.$or.push({ name: { $regex: filters.name, $options: "i" } });
	}
	if (filters.email) {
		query.$or.push({ email: { $regex: filters.email, $options: "i" } });
	}
	if (filters.phone) {
		query.$or.push({ phone: { $regex: filters.phone, $options: "i" } });
	}
	const users = await User.find(query);
	return users;
};

export const searchQueryFromDB = async (filters: UserQueryFilters) => {
	const query: any = {};

	if (filters.query) {
		const regexQuery = { $regex: filters.query, $options: "i" }; // Case-insensitive search
		query.$or = [
			{ name: regexQuery },
			{ email: regexQuery },
			{ phone: regexQuery },
			// Add more fields as needed
		];
	}
	const users = await User.find(query);
	return users;
};
