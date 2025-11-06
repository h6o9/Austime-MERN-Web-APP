const express = require("express");
const { submitContactForm } = require("../controller/contactController");

const router = express.Router();

// POST route for submitting the contact form
router.post("/contact-us", submitContactForm);

module.exports = router;
