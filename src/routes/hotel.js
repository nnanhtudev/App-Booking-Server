import express from "express";
import hotelsController from "../controller/Hotels/hotelsController";

const router = express.Router();

router.get("/read", hotelsController.getAllListHotels);
router.post("/create", hotelsController.createHotels);
router.put("/update", hotelsController.updateHotels);
router.delete("/delete", hotelsController.deleteHotels);

router.get("/:id", hotelsController.getHotelById);

export default router;
