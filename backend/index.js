const express = require("express");
const http = require("http");
const { neon } = require("@neondatabase/serverless");
const userRoutes = require("./routes/donationFormRoutes");
const cors = require("cors");
const app = express();
const db = require("./db");
const donationFormRoutes = require("./routes/donationFormRoutes");
const newsletterFormRoutes = require("./routes/newsletterFormRoutes");
const contactRoutes = require("./routes/contactRoutes");
const newsletterSubscriptionsRoutes = require("./routes/homePageFooterRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
app.use(cors());

app.use(express.json());

// Use donation routes
app.use("/", donationFormRoutes);
// Contact form routes
app.use("/", newsletterFormRoutes);
//Contact form home page contact form
app.use("/api", contactRoutes);
// Home Page Footer NewsLetter Subscription
app.use("/api", newsletterSubscriptionsRoutes);
// Appointment route
app.use("/api", appointmentRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
