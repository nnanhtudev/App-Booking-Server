import express from "express";
import roomController from "../controller/Room/roomController";
const router = express.Router();

router.get("/read", roomController.getAllRoom);
router.post("/findIds", roomController.getRoomByIds);

export default router;
