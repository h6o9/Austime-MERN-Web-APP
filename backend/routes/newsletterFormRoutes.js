const express = require("express");
const router = express.Router();
const contactController = require("../controller/newsletterFormController");

// Route to handle contact form submissions
router.post("/api/contact", contactController.createContact);

module.exports = router;
