const express = require("express");
const { bookAppointment } = require("../controller/appointmentController");

const router = express.Router();

// POST route for booking an appointment
router.post("/appointment", bookAppointment);

module.exports = router;
