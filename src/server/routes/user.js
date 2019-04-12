const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const bcrypt = require("bcryptjs");

const User = require("../models/User");

router.post("/login", (req, res) => {
  const name = req.body.name;
  const password = req.body.password;

  console.log("logging");
  console.log(name);

  User.findOne({ name }).then(user => {
    if (!user) {
      return res.status(404).json("User not found");
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
        return res.status(400).json("Incorrect Password");
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
