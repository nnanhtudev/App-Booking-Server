import express from 'express';
import hotelsController from '../controller/Hotels/hotelsController'

const router = express.Router();

router.get('/read', hotelsController.getAllListHotels);
router.get('/:id', hotelsController.getHotelById)

export default router;