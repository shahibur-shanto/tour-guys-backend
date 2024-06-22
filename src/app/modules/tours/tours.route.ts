

import express from "express";
import { createTours } from "./tours.controller";
const router = express.Router();

router.post('/', createTours);

export default router;