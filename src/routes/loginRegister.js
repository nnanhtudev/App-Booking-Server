import express from 'express';
import ApiLoginRegister from '../controller/Auth/loginRegisterController';

const router = express.Router();

router.post('/register', ApiLoginRegister.handleRegister);
router.post('/login', ApiLoginRegister.handleLogin);

export default router;