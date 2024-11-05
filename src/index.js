require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const cors = require("cors");
const midIdRoutes = require("./routes/mid.routes");

app.use(bodyParser.json());
app.use(cors())
app.use("/", midIdRoutes)

app.listen(process.env.PORT, () => {
    console.warn(`server is running is http://localhost:${process.env.PORT}/`)
})