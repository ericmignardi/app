import { Router } from "express";
import {
  register,
  login,
  logout,
  verify,
} from "../controllers/userController.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/verify", protectRoute, verify);

export default router;
