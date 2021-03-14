const express = require("express");
const router = express.Router();
const { ensureAuthenticated, isAdmin } = require("../middleware/checkAuth");
const { getAllSessions, revokeSession } = require("../middleware/sessions");

router.get("/", (req, res) => {
  res.send("welcome");
});

router.get("/dashboard", ensureAuthenticated, (req, res) => {
  res.render("dashboard", {
    user: req.user,
  });
});

router.get("/adminboard", ensureAuthenticated, isAdmin, (req, res) => {
  res.render("adminboard", {
    user: req.user,
    activeSessions: getAllSessions(req,res),
  });
});

router.get("/revokesession", ensureAuthenticated, isAdmin, (req, res) => {
  revokeSession(req.query.sessionId, req, res)
  res.redirect("/adminboard");
});


module.exports = router;
