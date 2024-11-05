// Import dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config(); // Load environment variables

// Initialize the Express app
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define Mongoose schema and model
const contactSchema = new mongoose.Schema({
  full_name: String,
  email_address: String,
  phone_number: String,
  subject: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

// Serve static files (if any) from 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Route to handle form submissions
app.post("/contact", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save(); // Save form data to MongoDB
    res.status(200).send("Form submitted successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error submitting the form.");
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
