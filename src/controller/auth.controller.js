const passport = require("passport")
exports.googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });
exports.facebookAuth = passport.authenticate('facebook', { scope: ['email'] });


exports.googleAuthCallback = passport.authenticate('google', {
    failureRedirect: '/login',
    successRedirect: '/',
});

exports.facebookAuthCallback = passport.authenticate('facebook', {
    failureRedirect: '/login',
    successRedirect: '/',
})

exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/'); 
    });
};
