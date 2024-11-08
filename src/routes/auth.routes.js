const express = require('express');
const authRoutes = express.Router();
const authController = require('../controller/auth.controller');

authRoutes.get('/auth/google', authController.googleAuth);
authRoutes.get('/auth/google/callback', authController.googleAuthCallback);
authRoutes.get('/logout', authController.logout);


authRoutes.get("/",(req,res)=>{
    res.send(req.isAuthenticated() ? `Hello, ${req.user.displayName}` : 'Hello, Guest. Please log in.');
 
})

module.exports = authRoutes;
