import express from 'express';
import { initializeClient, client } from '../services/authService.js';
import * as authController from '../controller/auth.controller.js';

const authRoutes = express.Router();

async function ensureClient(req, res, next) {
    if (!client) {
        try {
            await initializeClient();
        } catch (error) {
            return res.status(500).json({ message: "Client initialization failed", error: error.message });
        }
    }
    next();
}

authRoutes.get("/", ensureClient, authController.login);
authRoutes.get("/callback", ensureClient, authController.handleCallback);

export default authRoutes;
