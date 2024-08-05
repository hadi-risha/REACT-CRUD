
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import adminGenerateToken from '../utils/adminToken.js';
import bcrypt from 'bcryptjs';
import  { adminCredentials }  from '../config/adminCredential.js';


export const adminLogin =  asyncHandler(async (req, res) => {

    console.log("admin login workin");
    
    const { email, password } = req.body;
    const credentials = adminCredentials();

    console.log("entered admin email and psw", email, password, "og adminCredentials:",credentials.email , credentials.password);
    
    if (email !== credentials.email || password !== credentials.password) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    adminGenerateToken(res, credentials.email);

    res.status(200).json({message:'admin login...'})  //test

});


    
export const adminLogout = asyncHandler(async (req, res) => {
    // Clear the token cookie
    res.cookie('adminToken', '',
        { httpOnly: true ,
          expires: new Date(0) });
    
    res.status(200).json({ message: 'Admin logged out successfully!' });
});




        
        
