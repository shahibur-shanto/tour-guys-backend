import { Schema, model } from "mongoose";
import { IAdmin } from "./admin.interface";

const adminSchema = new Schema<IAdmin>({
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	country: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		required: true,
	},
});

const Admin = model<IAdmin>("Admin", adminSchema);

export default Admin;
