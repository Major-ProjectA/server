import express from "express";

import {
  getCompanys,
  createCompany,
} from "../controllers/company-controllers.js";

const router = express.Router();

router.get("/", getCompanys);

router.post("/", createCompany);

export default router;
