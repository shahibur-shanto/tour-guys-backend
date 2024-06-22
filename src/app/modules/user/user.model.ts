import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
	username: { type: String, required: true },
	email: { type: String, required: true },
	phone: { type: String, required: false },
});

const User = model<IUser>("User", userSchema);


export default User;