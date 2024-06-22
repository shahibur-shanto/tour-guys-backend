import { Schema, model } from "mongoose";
import { Itours } from "./tours.interface";

const tourSchema = new Schema<Itours>({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	country: {
		type: String,
		required: true,
	},
	transportation: {
		type: String,
		required: true,
	},
	duration: {
		type: Number,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	photo: {
		type: String,
		required: false,
	},
	gallerys: {
		gallery: {
			type: String,
			required: false,
		},
	},
});

const Tours = model<Itours>("tours", tourSchema);

export default Tours;
