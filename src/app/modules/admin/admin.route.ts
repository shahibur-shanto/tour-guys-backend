import express from "express";
import { createAdmin } from "./admin.controller";
const router = express.Router();
router.post("/", createAdmin);
router.post("/login");

export default router;
