const sql = require("../db"); // Import the Neon SQL client

// Controller function to handle contact form submissions
const submitContactForm = async (req, res) => {
  const { name, email, phoneNumber } = req.body;

  try {
    // Validate required fields
    if (!name || !email || !phoneNumber) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Insert data into the PostgreSQL table using Neon's tagged template literals
    const query = sql`
      INSERT INTO contact_us (name, email, "phoneNumber")
      VALUES (${name}, ${email}, ${phoneNumber})
      RETURNING *
    `;

    const result = await query;

    // Check if the result contains any rows
    if (!result || result.length === 0) {
      return res
        .status(500)
        .json({ message: "No data returned from the database." });
    }

    // Send success response
    res.status(201).json({
      message: "Message sent successfully!",
      data: result[0], // Access the first row directly
    });
  } catch (error) {
    console.error("Error inserting data:", error.message);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

module.exports = { submitContactForm };
