const express = require("express");
const passport = require("../middleware/passport");
const { forwardAuthenticated } = require("../middleware/checkAuth");

const router = express.Router();

router.get("/login", forwardAuthenticated,
  (req, res) => {
    res.render("login", {error: req.flash('error')});
  });

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/auth/login",
    failureFlash: true,
  })
);

// 'login with github' button
// router.get("/github",
//   passport.authenticate('github'));
// github callback url
// router.get("/github/callback",
//   passport.authenticate("github", {
//     successRedirect: "/dashboard",
//     failureRedirect: "/auth/login",
//   }));

// combine github callback with button click
router.get("/github",
  passport.authenticate("github", {
    successRedirect: "/dashboard",
    failureRedirect: "/auth/login",
  }));

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/auth/login");
});

module.exports = router;
