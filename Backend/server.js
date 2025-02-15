// server.js
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 5000;

// Use JSON middleware
app.use(express.json());

// Define the file path for the user data
const DATA_FILE = path.join(__dirname, "user_data.json");

// Endpoint to handle form submission
app.post("/submit-form", (req, res) => {
  console.log("Received data:", req.body);

  // Write the form data to the user_data.json file
  fs.writeFile(DATA_FILE, JSON.stringify(req.body, null, 2), (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return res.status(500).send("Error saving data");
    }
    console.log("Data successfully written to file");
    return res.status(200).send("Data saved successfully");
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
