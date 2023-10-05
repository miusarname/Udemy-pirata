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
      clientID: "1159364831397298176",
      clientSecret: "yJidVA8IHzOtz7CfOZ840f_NPnno8pe-",
      callbackURL: "http://192.168.129.72:3000/login",
      scope: ["identify","guilds","email"],
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
