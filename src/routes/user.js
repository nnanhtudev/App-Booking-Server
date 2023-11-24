import express from "express";
import ApiLoginRegister from "../controller/Auth/userController";
import { Logout } from "../controller/Auth/getInfoUser";
import apiAdminController from "../controller/Auth/LoginAdmin";
import { checkUserJWT } from "../middleware/JWTAction";
const router = express.Router();

// router.get("/account", checkUserJWT, ApiLoginRegister.getAccount);

router.post("/register", ApiLoginRegister.handleRegister);
router.post("/login", ApiLoginRegister.handleLogin);

router.post("/logout", Logout);

router.post("/login-admin", apiAdminController.handleLoginAdmin);

export default router;
