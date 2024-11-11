const passport = require('passport')

const failureRedirect = { failureRedirect: '/login', successRedirect: '/' }

// Google
exports.googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] })
exports.googleAuthCallback = passport.authenticate('google', failureRedirect)

// Facebook
exports.facebookAuth = passport.authenticate('facebook', { scope: ['email'] })
exports.facebookAuthCallback = passport.authenticate('facebook', failureRedirect)

// GitHub
exports.githubAuth = passport.authenticate('github', { scope: ['user:email'] })
exports.githubAuthCallback = passport.authenticate('github', failureRedirect)

// Twitter
exports.twitterAuth = passport.authenticate('twitter')
exports.twitterAuthCallback = passport.authenticate('twitter', failureRedirect)

// LinkedIn
exports.linkedinAuth = passport.authenticate('linkedin')
exports.linkedinAuthCallback = passport.authenticate('linkedin', failureRedirect)

// Logout
exports.logout = async (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err)
    res.redirect('/')
  })
}

