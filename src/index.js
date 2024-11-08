require("dotenv").config();

const express = require("express");
const passport = require("passport");
require("./config/passportConfig");
const authRoutes = require("./routes/auth.routes")
const app = express();

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use("/", authRoutes)

app.listen(process.env.PORT, () => {
  console.log(`server is running at http://localhost:${process.env.PORT}`)
})