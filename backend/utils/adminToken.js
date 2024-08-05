import jwt from 'jsonwebtoken';

const adminGenerateToken = (res, adminEmail) => {
    
    const token = jwt.sign({ adminEmail }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  res.cookie('adminToken', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development', // Use secure cookies in production
    sameSite: 'strict', // prevent CSRF attacks
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });
};

export default adminGenerateToken;