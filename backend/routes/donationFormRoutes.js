const express = require("express");
const router = express.Router();
const donationController = require("../controller/donateFormController");

// Route to handle donation submissions
router.post("/api/donate", donationController.createDonation);

module.exports = router;
