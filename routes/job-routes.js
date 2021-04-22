import express from "express";

import { getJobs } from "../controllers/job-controllers.js";

const router = express.Router();

router.get("/", getJobs);

// router.post("/", createJob);

export default router;