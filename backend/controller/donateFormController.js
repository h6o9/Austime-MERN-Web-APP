const sql = require("../db"); // Import the Neon SQL client

// Controller function to handle donation submissions
exports.createDonation = async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber, email, message } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !phoneNumber || !email) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Insert data into the donations table using Neon's tagged template literals
    const query = sql`
      INSERT INTO donations (first_name, last_name, phone_number, email, message)
      VALUES (${firstName}, ${lastName}, ${phoneNumber}, ${email}, ${message})
      RETURNING *
    `;

    const result = await query;

    // Check if the result contains any rows
    if (!result || result.length === 0) {
      return res
        .status(500)
        .json({ error: "No data returned from the database." });
    }

    // Respond with success message and saved data
    res.status(201).json({
      message: "Thank you for your generous donation!",
      donation: result[0], // Access the first row directly
    });
  } catch (error) {
    console.error("Error saving donation:", error.message);

    // Handle other errors
    res.status(500).json({
      error: "An error occurred while saving the donation.",
      details: error.message,
    });
  }
};
