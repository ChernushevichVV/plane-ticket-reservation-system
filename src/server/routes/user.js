const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const bcrypt = require("bcryptjs");

const User = require("../models/User");

router.post("/register", (req, res) => {
  User.findOne({
    name: req.body.name
  }).then(user => {
    if (user) {
      return res.status(400).json({
        name: "Username already exists"
      });
    } else {
      const newUser = new User({
        name: req.body.name,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        if (err) console.error("There was an error", err);
        else {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) console.error("There was an error", err);
            else {
              newUser.password = hash;
              newUser.save().then(user => {
                res.json(user);
              });
            }
          });
        }
      });
    }
  });
});

router.post("/login", (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const errors = {};

  User.findOne({ name }).then(user => {
    if (!user) {
      errors.name = "User not found";
      return res.status(404).json(errors);
    }
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = {
          id: user.id,
          name: user.name
        };

        jwt.sign(
          payload,
          "secret",
          {
            expiresIn: 3600
          },
          (err, token) => {
            if (err) console.error("Error in token", err);
            else {
              res.json({
                success: true,
                token: `Bearer ${token}`
              });
            }
          }
        );
      } else {
        errors.password = "Incorrect Password";
        return res.status(400).json(errors);
      }
    });
  });
});

router.get(
  "/me",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    return res.json({
      id: req.user.id,
      name: req.user.name
    });
  }
);

module.exports = router;
