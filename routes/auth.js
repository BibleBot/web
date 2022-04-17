const express = require('express');
const router = express.Router();

const db = require('../db');

const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;
const refresh = require('passport-oauth2-refresh');

const discordStrategy = new DiscordStrategy({
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: process.env.DISCORD_CALLBACK_URL,
    scope: [ 'identify', 'email', 'guilds', 'guilds.join' ]
}, (accessToken, refreshToken, profile, cb) => {
    profile.refreshToken = refreshToken;
    db.User.findOneAndUpdate({UserId: profile.id}, {Avatar: `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`}, (err, doc) => {
        if (doc) {
            return cb(err, doc);
        } else {
            db.User.create({UserId: profile.id, UserName: `${profile.username}#${profile.discriminator}`, Avatar: `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`}, (err, doc) => {
                return cb(err, doc);
            })
        }
    })
})
passport.use(discordStrategy);
refresh.use(discordStrategy);

passport.serializeUser((user, cb) => {
    process.nextTick(() => {
        cb(null, { id: user.UserId, name: user.UserName, avatar: user.Avatar})
    })
})

passport.deserializeUser((user, cb) => {
    process.nextTick(() => {
        return cb(null, user);
    })
})

router.get("/login/success", (req, res) => {
    if (req.user) {
      res.json({
        success: true,
        message: "user has successfully authenticated",
        user: req.user,
        cookies: req.cookies
      });
    }
})

router.get("/login/failed", (req, res) => {
    res.status(401).json({
      success: false,
      message: "user failed to authenticate."
    });
})

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("http://localhost:3001");
});

router.get("/discord", passport.authenticate("discord"));

router.get(
  "/callback",
  passport.authenticate("discord", {
    successRedirect: "http://localhost:3001/",
    failureRedirect: "/login/failed"
  })
);
module.exports = router;