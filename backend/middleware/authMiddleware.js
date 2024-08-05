import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const protect = asyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.jwt;    //extract the JWT

  if(token){
    try{
      const decoded = jwt.verify(token, process.env.JWT_SECRET);   //verify the token

      req.user = await User.findById(decoded.userId).select('-password');   //here we can access everything that pass when create the token in generatetoken file
      next();

    }catch(error) {
      console.error("error from authmiddleware page",error);
      res.status(401);
      throw new Error('Not authorized, invalid token');
    }
  } else {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

export { protect };