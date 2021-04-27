import express from "express";

import { getJobs, getJobtById } from "../controllers/job-controller.js";

const router = express.Router();

router.get("/", getJobs);
router.get("/:jid", getJobtById);

export default router;
