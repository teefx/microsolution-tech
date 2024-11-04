// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// const https = require("https");
// const config = require("./config.js"); // Ensure your API key is here

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public")); // Serve static files

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/index.html"); // Path to your HTML file
// });

// app.post("/", function (req, res) {
//   const fullName = req.body.full_name;
//   const email = req.body.email_address;
//   const phoneNumber = req.body.phone_number;
//   const subject = req.body.subject; // New field
//   const message = req.body.message; // New field

//   const data = {
//     members: [
//       {
//         email_address: email,
//         status: "subscribed",
//         merge_fields: {
//           PHONE: phoneNumber,
//           FNAME: fullName.split(" ")[0],
//           LNAME: fullName.split(" ")[1],
//           SUBJECT: subject, // Added subject
//           MESSAGE: message, // Added message
//         },
//       },
//     ],
//   };

//   const jsonData = JSON.stringify(data);
//   const url = "https://us12.api.mailchimp.com/3.0/lists/06c2fc061f"; // Update with your list ID

//   const options = {
//     method: "POST",
//     auth: config.apiKey, // Ensure this points to your Mailchimp API key
//   };

//   const request = https.request(url, options, function (response) {
//     if (response.statusCode === 200) {
//       res.sendFile(__dirname + "/public/HTML/successful.html"); // Path to success page
//     } else {
//       res.sendFile(__dirname + "/public/HTML/failure.html"); // Path to failure page
//     }

//     response.on("data", function (data) {
//       console.log(JSON.parse(data));
//     });
//   });

//   request.write(jsonData);
//   request.end();
//   console.log(data.members[0]); // Log the data sent
// });

// // Start the server
// const PORT = process.env.PORT || 3000; // Set the port
// app.listen(PORT, function () {
//   console.log(`Server is running on port ${PORT}`);
// });
