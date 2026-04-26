const express = require("express");
const router = express.Router();

// Index - user
router.get("/", (req, res) => {
  res.send("GET for users");
});

// Show - user
router.get("/:id", (req, res) => {
  res.send("GET for user id");
});

// POST - user
router.post("/", (req, res) => {
  res.send("GET for users");
});
// DELETE - user
router.delete("/:id", (req, res) => {
  res.send("DELETE for user id");
});

module.exports = router;
