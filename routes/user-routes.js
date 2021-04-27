import express from "express";

import {
  signup,
  login,
  logout,
  loggedIn,
} from "../controllers/user-controllers.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);
router.get("/loggedIn", loggedIn);

export default router;
