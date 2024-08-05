import express from 'express';
import  {adminLogin, adminLogout}  from '../controllers/adminController.js';


const router = express.Router();

router.post('/adminLogin', adminLogin);
router.post('/adminLogout', adminLogout);

export default router;
