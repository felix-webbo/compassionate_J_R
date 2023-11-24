const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");

const saltRounds = 10; // Number of salt rounds for bcrypt hashing

const app = express();

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "webbo",
  password: "zak254web8$",
  database: "cjr_users",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection error: " + err.stack);
    return;
  }
  console.log("Connected to the database");
});

app.post("/register", (req, res) => {
  const { name, email, phone, password, confirmPassword } = req.body;

  // Validation
  if (!name || !email || !phone || !password || !confirmPassword) {
    return res.status(400).json({ message: "All fields are required." });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match." });
  }

  // Check if the email is already in use
  db.query("SELECT * FROM users WHERE email = ?", [email], (error, results) => {
    if (error) {
      console.error("Database error: " + error);
      return res.status(500).json({ message: "Registration failed." });
    }
    if (results.length > 0) {
      return res.status(400).json({ message: "Email is already registered." });
    }

    // Insert user data into the database
    bcrypt.hash(password, saltRounds, (hashErr, hash) => {
      if (hashErr) {
        console.error("Error hashing password:", hashErr);
        return;
      }
      db.query(
        "INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)",
        [name, email, phone, password],
        (insertError, insertResult) => {
          if (insertError) {
            console.error("Database insert error: " + insertError);
            return res.status(500).json({ message: "Registration failed." });
          }
          return res.status(200).json({ message: "Registration successful." });
        }
      );
    });
  });
});

// ... (previous code)

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email and password are required." });
  }

  // Check if the user exists in the database
  db.query("SELECT * FROM users WHERE email = ?", [email], (error, results) => {
    if (error) {
      console.error("Database error: " + error);
      return res.status(500).json({ message: "Login failed." });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: "User not found." });
    }

    const user = results[0];
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid password." });
    }

    return res.status(200).json({ message: "Login successful." });
  });
});

// ... (rest of the server code)

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
