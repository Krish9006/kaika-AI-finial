import { Router } from "express";
import { createuser, loginUser } from "../../controller/usercontroller.js";

const router = Router();

router.post("/", createuser);
router.post("/login", loginUser);

export default router;
