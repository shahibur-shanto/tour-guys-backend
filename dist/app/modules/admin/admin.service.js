"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdminToDB = void 0;
const admin_model_1 = __importDefault(require("./admin.model"));
const createAdminToDB = (payload) => {
    const admin = new admin_model_1.default(payload);
    admin.save();
    return admin;
};
exports.createAdminToDB = createAdminToDB;
