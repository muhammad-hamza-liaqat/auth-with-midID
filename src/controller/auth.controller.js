import { client, handleCallback as handleAuthCallback } from '../services/authService.js';

export function login(req, res) {
    const authorizationUrl = client ? client.authorizationUrl() : '';
    res.redirect(authorizationUrl);
}

export async function handleCallback(req, res) {
    try {
        const tokenSet = await handleAuthCallback(req);
        res.json({
            statusCode: 200,
            message: "Authorization done",
            data: `Authentication successful! Here are your tokens: ${JSON.stringify(tokenSet)}`,
        });
    } catch (error) {
        console.error("Error during callback:", error);
        res.status(500).json({ message: "Authentication failed", error: error.message });
    }
}
