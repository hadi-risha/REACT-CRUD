import express from 'express';
const router = express.Router();
import { authUser,
        registerUser,
        logoutUser,
        getUserProfile,
        updateUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js'
// import  {adminLogin}  from '../controllers/adminController.js';


router.post('/', registerUser); 
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
// router.post('/adminLogin', adminLogin);


export default router;