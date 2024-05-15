import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';

const GOOGLE_CLIENT_ID = "453712054326-5apqqinl5imi8uo2ln54mjthm7gco8jm.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/callback",
  passReqToCallback: true,
},
function(request, accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

// No default export is needed here if you are just setting up passport strategies
export default passport;
