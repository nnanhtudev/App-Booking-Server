import express from "express";
import searchController from "../controller/Search/searchController";
const router = express.Router();

router.post("/hotels", searchController.searchHotels);

export default router;
