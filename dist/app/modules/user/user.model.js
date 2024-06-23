"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: false },
});
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;