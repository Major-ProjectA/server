import express from "express";

import { 
    getCv, getCvById, getCvByUserId, createProfile, updateCv, deleteCv, createCV, createEducation, createProject, createExperience, createExtras
} from "../controllers/cv-controllers.js";

const router = express.Router();

router.get("/", getCv);
router.get("/:pid", getCvById);
router.get("/user/:pid", getCvByUserId);
router.post("/createcv", createCV);
router.post("/createProfile", createProfile);
router.post("/createEducation", createEducation);
router.post("/createProject", createProject);
router.post("/createExperience", createExperience);
router.post("/createExtra", createExtras);
router.patch("/:pid", updateCv);
router.delete("/:pid", deleteCv);

export default router;
