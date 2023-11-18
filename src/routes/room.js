import express from 'express';
import roomController from '../controller/Room/roomController'
const router = express.Router();

router.get('/read', roomController.getAllRoom);

export default router;