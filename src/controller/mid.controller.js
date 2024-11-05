const axios = require("axios");

// Load environment variables
const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUri = process.env.CALLBACK_URL;
const authorizationUrl = process.env.AUTHORIZATION_URL;
const tokenUrl = process.env.TOKEN_URL;

exports.loginWithMidId = async (req, res) => {
    try {
        const authUrl = `${authorizationUrl}?response_type=code&client_id=${clientID}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=openid`;
        console.log("Redirecting to:", authUrl);
        res.redirect(authUrl);  
    } catch (error) {
        console.error("Error in loginWithMidId:", error);
        res.status(500).json({ statusCode: 500, message: "Failed to initiate login", error: error.message });
    }
};

exports.callBackMidId = async (req, res) => {
    const code = req.query.code;
    console.log("Authorization code:", code);

    if (!code) {
        return res.status(400).json({ statusCode: 400, message: "Authorization code not found" });
    }

    try {
        // Exchange authorization code for tokens
        const response = await axios.post(
            tokenUrl,
            new URLSearchParams({
                client_id: clientID,
                client_secret: clientSecret,
                code: code,
                grant_type: "authorization_code",
                redirect_uri: redirectUri,
            }).toString(),
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );

        const tokens = response.data;
        console.log("Tokens received:", tokens);

        // Send tokens back to client (In production, consider storing them securely server-side)
        return res.status(200).json({ statusCode: 200, message: "Successfully logged in", data: tokens });
    } catch (error) {
        console.error("Error in callBackMidId:", error);
        res.status(500).json({ statusCode: 500, message: "Internal server error", error: error.message });
    }
};
