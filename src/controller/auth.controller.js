exports.googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });

exports.googleAuthCallback = passport.authenticate('google', {
  failureRedirect: '/login',
  successRedirect: '/',
});

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/');
};
