const axios = require("axios");

// Load environment variables
const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CRIIPTO_CLIENT_SECRET; 
const redirectUri = encodeURIComponent(process.env.REDIRECT_URI);
const criiptoDomain = process.env.CRIIPTO_DOMAIN;

exports.loginWithMidId = async (req, res) => {
    try {
        const authorizationUrl = `${criiptoDomain}/oauth2/authorize?response_type=code&client_id=${clientID}&redirect_uri=${redirectUri}&scope=openid`;
        console.log("Redirecting to:", authorizationUrl);
        res.redirect(authorizationUrl);  
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
        const response = await axios.post(
            `${criiptoDomain}/oauth2/token`, 
            new URLSearchParams({
                client_id: clientID,
                client_secret: clientSecret,
                code: code,
                grant_type: "authorization_code",
                redirect_uri: process.env.REDIRECT_URI,
            }).toString(),
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );

        const tokens = response.data;
        console.log("Tokens received:", tokens);

        return res.status(200).json({ statusCode: 200, message: "Successfully logged in", data: tokens });
    } catch (error) {
        console.error("Error in callBackMidId:", error.response ? error.response.data : error.message);
        res.status(500).json({ statusCode: 500, message: "Internal server error", error: error.response ? error.response.data : error.message });
    }
};
