import express from "express";
import { createTours } from "./tours.controller";
import multer from "multer";
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/", upload.single("image"), createTours);

export default router;
