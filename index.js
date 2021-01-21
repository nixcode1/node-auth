const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require('passport')
const applyPassportStrategy = require('./passport')

// Connect to DB
mongoose.connect(
  "mongodb://localhost:27017/auth",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB")
);


// Middleware
app.use(express.json())
applyPassportStrategy(passport);


// Import Routes
const authRoute = require("./routes/auth");
const postRoute = require('./routes/posts')

//Routes Middleware
app.use("/api/user", authRoute);
app.use('/api/posts', postRoute);

app.listen(3000, () => console.log("Sever running"));
