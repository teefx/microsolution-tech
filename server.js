const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.error("MongoDB connection error:", err));

const contactSchema = new mongoose.Schema({
  full_name: String,
  email_address: String,
  phone_number: String,
  subject: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

app.use(express.static(path.join(__dirname, "public")));

app.post("/contact", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save(); // Save form data to MongoDB
    res.status(200).sendFile(__dirname + "/public/success.html"); // Send success.html on successful submission
  } catch (error) {
    console.error(error);
    res.status(500).sendFile(__dirname + "/public/error.html"); // Send error.html on failure
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
