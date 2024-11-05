const express = require("express");
const { loginWithMidId, callBackMidId } = require("../controller/mid.controller");
const midIdRoutes = express.Router();

midIdRoutes.get("/login", loginWithMidId);
midIdRoutes.post("/callback", callBackMidId);

module.exports = midIdRoutes