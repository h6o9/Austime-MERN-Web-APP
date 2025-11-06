const sql = require("../db"); // Import the Neon SQL client

// Controller function to handle newsletter subscription
const subscribeToNewsletter = async (req, res) => {
  const { name, email } = req.body;

  try {
    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required." });
    }

    // Insert data into the PostgreSQL table using Neon's tagged template literals
    const query = sql`
      INSERT INTO newsletter_subscriptions (name, email)
      VALUES (${name}, ${email})
      ON CONFLICT (email) DO NOTHING
      RETURNING *
    `;

    const result = await query;

    // Check if the result contains any rows
    if (!result || result.length === 0) {
      // If no rows are returned, it means the email already exists
      return res.status(409).json({ message: "Email already subscribed." });
    }

    // Send success response
    res.status(201).json({
      message: "Thank you for subscribing!",
      data: result[0], // Access the first row directly
    });
  } catch (error) {
    console.error("Error inserting data:", error.message);

    // Handle other errors
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

module.exports = { subscribeToNewsletter };
