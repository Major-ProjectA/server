import express from "express";

import { 
    getCv, getCvById, getCvByUserId, createCv, createProfile, updateCv, deleteCv, createCV
} from "../controllers/cv-controllers.js";

const router = express.Router();

router.get("/", getCv);
router.get("/:pid", getCvById);
router.get("/user/:pid", getCvByUserId);
router.post("/", createCv);
router.post("/createcv", createCV);
router.post("/createProfile", createProfile);
router.patch("/:pid", updateCv);
router.delete("/:pid", deleteCv);

export default router;
