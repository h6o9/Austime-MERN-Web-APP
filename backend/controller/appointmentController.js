const sql = require("../db");

// Controller function to handle appointment booking
const bookAppointment = async (req, res) => {
  const {
    parentName,
    studentName,
    phoneNumber,
    email,
    preferredDate,
    preferredTime,
  } = req.body;

  try {
    if (
      !parentName ||
      !studentName ||
      !phoneNumber ||
      !email ||
      !preferredDate ||
      !preferredTime
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }
    // Insert data into the PostgreSQL table
    const query = sql`
  INSERT INTO appointments (parent_name, student_name, phone_number, email, preferred_date, preferred_time)
  VALUES (${parentName}, ${studentName}, ${phoneNumber}, ${email}, ${preferredDate}, ${preferredTime})
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
      message: "Appointment booked successfully!",
      data: result[0], // Access the first row directly
    });
  } catch (error) {
    console.error("Error inserting data:", error.message);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

module.exports = { bookAppointment };
