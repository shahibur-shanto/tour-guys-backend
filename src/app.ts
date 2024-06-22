import express, { Application } from "express";
import cors from "cors";
import fileupload from "express-fileupload";

import userRoutes from "./app/modules/user/user.route";
import adminRoutes from "./app/modules/admin/admin.route";
import toursRoutes from "./app/modules/tours/tours.route";
import fileUpload from "express-fileupload";

const app: Application = express();
app.use(cors());


app.use(
	fileUpload({
		useTempFiles: true,
	})
);
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/tours", toursRoutes);
export default app;
