import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';



passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

// No default export is needed here if you are just setting up passport strategies
export default passport;
