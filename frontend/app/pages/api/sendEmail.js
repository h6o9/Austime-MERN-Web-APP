import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com", // For Gmail
        port: 587, // For TLS
        secure: false, // Use other SMTP services if needed
        auth: {
          user: process.env.EMAIL_USER, // Your email address
          pass: process.env.EMAIL_PASS, // Your email password or app password
        },
      });

      await transporter.sendMail({
        from: email, // Email provided in the input field
        to: "your-email@example.com", // Your target email address
        subject: "Newsletter Subscription",
        text: `Name: ${name}\nEmail: ${email}`,
      });

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Failed to send email", error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
