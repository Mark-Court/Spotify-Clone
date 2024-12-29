import { Router } from "express";
import { getAllStat } from "../controller/stat.controller.js";
import { protectRoute, requiredAdmin } from "../middleware/auth.middleware.js";

const router = Router();

router.get('/', protectRoute, requiredAdmin, getAllStat);

export default router;