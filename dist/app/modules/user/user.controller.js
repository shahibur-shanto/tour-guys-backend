"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchSingleQuery = exports.searchUser = exports.deleteUser = exports.updateUser = exports.userById = exports.allUsers = exports.createUser = void 0;
const user_service_1 = require("./user.service");
const createUser = async (req, res, next) => {
    const data = req.body;
    const user = await (0, user_service_1.createUserToDB)(data);
    res.status(200).json({
        status: "success",
        data: user,
    });
};
exports.createUser = createUser;
const allUsers = async (req, res, next) => {
    const users = await (0, user_service_1.getAllUsers)();
    res.status(200).json({
        status: "success",
        data: users,
    });
};
exports.allUsers = allUsers;
const userById = async (req, res, next) => {
    const { id } = req.params;
    console.log(id);
    const userById = await (0, user_service_1.getUserById)(id);
    res.status(200).json({
        status: "success",
        data: userById,
    });
};
exports.userById = userById;
const updateUser = async (req, res, next) => {
    const { id } = req.params;
    const data = req.body;
    const user = await (0, user_service_1.updateUserToDB)(id, data);
    res.status(200).json({
        status: "success",
        data: user,
    });
};
exports.updateUser = updateUser;
const deleteUser = async (req, res, next) => {
    const { id } = req.params;
    const user = await (0, user_service_1.deleteUserFromDB)(id);
    res.status(200).json({
        status: "success",
        data: user,
    });
};
exports.deleteUser = deleteUser;
const searchUser = async (req, res, next) => {
    const filters = req.query;
    const users = await (0, user_service_1.searchUserFromDB)(filters);
    res.status(200).json({
        status: "success",
        data: users,
    });
};
exports.searchUser = searchUser;
const searchSingleQuery = async (req, res, next) => {
    const filters = req.query;
    const users = await (0, user_service_1.searchQueryFromDB)(filters);
    res.status(200).json({
        status: "success",
        data: users,
    });
};
exports.searchSingleQuery = searchSingleQuery;
