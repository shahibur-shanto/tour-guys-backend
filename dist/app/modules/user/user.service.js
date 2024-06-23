"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchQueryFromDB = exports.searchUserFromDB = exports.deleteUserFromDB = exports.updateUserToDB = exports.getUserById = exports.getAllUsers = exports.createUserToDB = void 0;
const user_model_1 = __importDefault(require("./user.model"));
const createUserToDB = async (payload) => {
    const user = new user_model_1.default(payload);
    await user.save();
    return user;
};
exports.createUserToDB = createUserToDB;
const getAllUsers = async () => {
    const users = await user_model_1.default.find();
    return users;
};
exports.getAllUsers = getAllUsers;
const getUserById = async (id) => {
    const user = await user_model_1.default.findOne({ email: id }
    /*
    this is for what we show
    {
        name: 1,
    }
        */
    );
    return user;
};
exports.getUserById = getUserById;
const updateUserToDB = async (id, data) => {
    const user = await user_model_1.default.findOneAndUpdate({ email: id }, { $set: data }, { new: true });
    return user;
};
exports.updateUserToDB = updateUserToDB;
const deleteUserFromDB = async (id) => {
    const user = await user_model_1.default.findOneAndDelete({
        email: id,
    });
    return user;
};
exports.deleteUserFromDB = deleteUserFromDB;
const searchUserFromDB = async (filters) => {
    const query = { $or: [] };
    if (filters.name) {
        query.$or.push({ name: { $regex: filters.name, $options: "i" } });
    }
    if (filters.email) {
        query.$or.push({ email: { $regex: filters.email, $options: "i" } });
    }
    if (filters.phone) {
        query.$or.push({ phone: { $regex: filters.phone, $options: "i" } });
    }
    const users = await user_model_1.default.find(query);
    return users;
};
exports.searchUserFromDB = searchUserFromDB;
const searchQueryFromDB = async (filters) => {
    const query = {};
    if (filters.query) {
        const regexQuery = { $regex: filters.query, $options: "i" }; // Case-insensitive search
        query.$or = [
            { name: regexQuery },
            { email: regexQuery },
            { phone: regexQuery },
            // Add more fields as needed
        ];
    }
    const users = await user_model_1.default.find(query);
    return users;
};
exports.searchQueryFromDB = searchQueryFromDB;
