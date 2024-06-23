"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdmin = void 0;
const admin_service_1 = require("./admin.service");
const createAdmin = async (req, res, next) => {
    const data = req.body;
    const admin = await (0, admin_service_1.createAdminToDB)(data);
    res.status(200).json({
        status: "success",
        data: admin,
    });
};
exports.createAdmin = createAdmin;
