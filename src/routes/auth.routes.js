const express = require('express')
const authRoutes = express.Router()
const authController = require('../controller/auth.controller')

authRoutes.get('/auth/google', authController.googleAuth)
authRoutes.get('/auth/google/callback', authController.googleAuthCallback)

authRoutes.get('/auth/facebook', authController.facebookAuth)
authRoutes.get('/auth/facebook/callback', authController.facebookAuthCallback)

authRoutes.get('/auth/github', authController.githubAuth)
authRoutes.get('/auth/github/callback', authController.githubAuthCallback)

authRoutes.get('/auth/twitter', authController.twitterAuth)
authRoutes.get('/auth/twitter/callback', authController.twitterAuthCallback)

authRoutes.get('/auth/linkedin', authController.linkedinAuth)
authRoutes.get('/auth/linkedin/callback', authController.linkedinAuthCallback)

authRoutes.get('/logout', authController.logout)

authRoutes.get('/', (req, res) => {
  res.send(
    req.isAuthenticated()
      ? `Hello, ${req.user.displayName}`
      : 'Hello, Guest. Please log in.',
  )
})

authRoutes.get('/login', (req, res) => {
  res.send('Please log in using one of the authentication methods.')
})

module.exports = authRoutes
