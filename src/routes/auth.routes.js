const express = require('express')
const authRoutes = express.Router()
const authController = require('../controller/auth.controller')

// Google OAuth routes
authRoutes.get('/auth/google', authController.googleAuth)
authRoutes.get('/auth/google/callback', authController.googleAuthCallback)

// Facebook OAuth routes
authRoutes.get('/auth/facebook', authController.facebookAuth)
authRoutes.get('/auth/facebook/callback', authController.facebookAuthCallback)

// GitHub OAuth routes
authRoutes.get('/auth/github', authController.githubAuth)
authRoutes.get('/auth/github/callback', authController.githubAuthCallback)

// Twitter OAuth routes
authRoutes.get('/auth/twitter', authController.twitterAuth)
authRoutes.get('/auth/twitter/callback', authController.twitterAuthCallback)

// linkedin Outh
authRoutes.get('/auth/linkedin', authController.linkedinAuth)
authRoutes.get('/auth/linkedin/callback', authController.linkedinAuthCallback)

// Logout route
authRoutes.get('/logout', authController.logout)

// Home route for testing authentication status
authRoutes.get('/', (req, res) => {
    res.send(req.isAuthenticated() ? `Hello, ${req.user.displayName}` : 'Hello, Guest. Please log in.')
})

module.exports = authRoutes
