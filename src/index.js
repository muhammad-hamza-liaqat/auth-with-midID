require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`server is running at http://localhost:${process.env.PORT}`)
})