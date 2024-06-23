import mongoose from "mongoose";
import app from "./app";

const port = 5000;

async function db_connect() {
	try {
		await mongoose.connect(
			"mongodb+srv://my-book:gOBQ03IJT8rKkg5p@cluster0.qxopl.mongodb.net/tour-guys-bd?retryWrites=true&w=majority&appName=Cluster0"
			// "mongodb://127.0.0.1:27017/test"
		);
		app.listen(port, () => {
			console.log(`Example app listening on port ${port}`);
		});

		console.log("database connect successful");
	} catch (error) {
		console.log("failed to connect database: ", error);
	}
}
db_connect();
