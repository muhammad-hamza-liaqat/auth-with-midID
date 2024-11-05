const axios = require("axios");

// from environment variables
const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUri = process.env.CALLBACK_URL;
const authorizationUrl = process.env.AUTHORIZATION_URL;

exports.loginWithMidId = async (req, res) => {
    try {
        const authUrl = `${authorizationUrl}?response_type=code&client_id=${clientID}&redirect_uri=${encodeURIComponent(redirectUri)}`;
        console.log("Redirecting to:", authUrl);
        res.redirect(authUrl);
    } catch (error) {
        console.log("Error in loginWithMidId:", error);
        return res.status(500).json({ statusCode: 500, message: "Failed to initiate login", error: error.message });
    }
};

exports.callBackMidId = async (req, res) => {
    const code = req.query.code;
    console.log("Authorization code:", code);

    try {
        const response = await axios.post(
            "https://mitid-provider.com/token",
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
        return res.status(200).json({ statusCode: 200, message: "Successfully logged in", data: tokens });
    } catch (error) {
        console.log("Error in callBackMidId:", error);
        return res.status(500).json({ statusCode: 500, message: "Internal server error", error: error.message });
    }
};