const express = require("express");
const {
  subscribeToNewsletter,
} = require("../controller/homePageFooterController");

const router = express.Router();

// POST route for newsletter subscription
router.post("/newsletter", subscribeToNewsletter);

module.exports = router;
