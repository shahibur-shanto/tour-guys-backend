import Admin from "./admin.model";

export const createAdminToDB = (payload) => {
	const admin = new Admin(payload);
	admin.save();
	return admin;
};
