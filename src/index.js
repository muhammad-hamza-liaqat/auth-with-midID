require("dotenv").config();

const express = require("express");
const app = express();

app.listen(process.env.PORT, () => {
    console.warn(`server is running is http://${process.env.PORT}:/`)
})