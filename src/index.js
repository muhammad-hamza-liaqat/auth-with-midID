require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.json());
app.use(cors())

app.listen(process.env.PORT, () => {
    console.warn(`server is running is http://${process.env.PORT}:/`)
})