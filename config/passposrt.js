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
      clientID: "762056921255510017",
      clientSecret: "6XKoJkuEYmQ9Px_1hW74EVtT-s9Fjx0Z",
      callbackURL: "http://localhost:3000/login",
      scope: ["identify","guilds"],
    },
    (accesstoken, refreshToken, profile, cb) => {
      if (profile.guilds.find(g => g.id === '1101581994355347526')){
        process.nextTick(() => {
          console.log(profile)
          return cb(null, profile);
        });
      } else {
        return cb(null, false);
      }
    }
  )
);

export default passport;
