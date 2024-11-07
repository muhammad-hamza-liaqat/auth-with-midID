import express from "express"
const authRoutes = express.Router()
import * as authController from "../controller/auth.controller.js"

authRoutes.get("/", authController.login)
authRoutes.get("/callback", authController.handleCallback)

export default authRoutes