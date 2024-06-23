"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
router.get("/", user_controller_1.allUsers);
router.get("/search", user_controller_1.searchUser);
router.get("/query", user_controller_1.searchSingleQuery);
router.get("/:id", user_controller_1.userById);
router.post("/", user_controller_1.createUser);
router.post("/login");
router.put("/:id", user_controller_1.updateUser);
router.delete("/:id", user_controller_1.deleteUser);
exports.default = router;
