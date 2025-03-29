import { Router } from 'express';
import { loginUser, logoutUser, registerUser, uploadAvatar } from '../controllers/user.controller.js';
import auth from '../middleware/auth.middleware.js';
import upload from '../middleware/multer.js';

const router = Router();
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', auth, logoutUser);
router.put('/upload-avatar', auth,upload.single('avatar'),uploadAvatar );


export default router;