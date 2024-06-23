"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_route_1 = __importDefault(require("./app/modules/user/user.route"));
const admin_route_1 = __importDefault(require("./app/modules/admin/admin.route"));
const tours_route_1 = __importDefault(require("./app/modules/tours/tours.route"));
// import fileUpload from "express-fileupload";
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// app.use(
// 	fileUpload({
// 		useTempFiles: true,
// 	})
// );
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.use("/api/v1/user", user_route_1.default);
app.use("/api/v1/admin", admin_route_1.default);
app.use("/api/v1/tours", tours_route_1.default);
exports.default = app;
