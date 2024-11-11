const passport = require("passport");

// Google
exports.googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });
exports.googleAuthCallback = passport.authenticate('google', {
    failureRedirect: '/login',
    successRedirect: '/',
});

// fb
exports.facebookAuth = passport.authenticate('facebook', { scope: ['email'] });
exports.facebookAuthCallback = passport.authenticate('facebook', {
    failureRedirect: '/login',
    successRedirect: '/',
});

// github
exports.githubAuth = passport.authenticate('github', { scope: ['user:email'] });
exports.githubAuthCallback = passport.authenticate('github', {
    failureRedirect: '/login',
    successRedirect: '/',
});

// Logout
exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
};
