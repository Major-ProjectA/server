import express from "express";

import { getCategories } from "../controllers/category-controllers.js";

const router = express.Router();

router.get("/", getCategories);

export default router;