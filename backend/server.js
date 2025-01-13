require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const db = require("./config/db");
const path = require('path');


// Connect to database
db();

// Middleware
app.use(express.json());

app.use(cors());

//
app.use(express.static(path.join(__dirname, '../frontend')));

// Routes
app.use('/api', require('./routes/Add'));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
