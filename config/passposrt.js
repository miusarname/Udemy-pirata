import passport from "passport";
import { Strategy } from "passport-discord";

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

passport.use(
  new Strategy(
    {
      clientID: "762724859679080458",
      clientSecret: "T8fI5NZ5EaX8esOfv8c9CrjjAi8dAUMq",
      callbackURL: "http://localhost:3000/login",
      scope: ["identify","guilds"],
    },
    (accesstoken, refreshToken, profile, cb) => {
      process.nextTick(() => {
        return cb(null, profile);
      });
    }
  )
);

export default passport;
