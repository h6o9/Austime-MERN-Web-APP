const sql = require("../db");

exports.createContact = async (req, res) => {
  try {
    const { name, email, phoneNumber } = req.body;

    // Validate required fields
    if (!name || !email || !phoneNumber) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Insert data into the contacts table
    const query = sql`
    INSERT INTO newsletter (name, email, "phoneNumber")
    VALUES (${name}, ${email}, ${phoneNumber})
    RETURNING *
  `;

    const result = await query;

    // Respond with success message and saved data
    res.status(201).json({
      message: "Thank you for contacting us! We will get back to you soon.",
      contact: result.rows[0],
    });
  } catch (error) {
    console.error("Error saving contact form data:", error);
    res
      .status(500)
      .json({ error: "An error occurred while saving the contact form data." });
  }
};
