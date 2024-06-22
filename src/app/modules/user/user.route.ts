import express from "express";
import {
	allUsers,
	createUser,
	deleteUser,
	searchSingleQuery,
	searchUser,
	updateUser,
	userById,
} from "./user.controller";

const router = express.Router();

router.get("/", allUsers);
router.get("/search", searchUser);
router.get("/query", searchSingleQuery);
router.get("/:id", userById);
router.post("/", createUser);
router.post("/login");
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
