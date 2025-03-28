import { Router } from 'express';
import { loginUser, logoutUser, registerUser } from '../controllers/user.controller.js';
import auth from '../middleware/auth.middleware.js';

const router = Router();
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout',auth, logoutUser);


export default router;