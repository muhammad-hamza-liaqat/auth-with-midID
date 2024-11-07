import * as authService from '../services/authService.js';
export async function login(req, res) {
    try {
        const authUrl = authService.getAuthorizationUrl()
        res.redirect(authUrl)

    } catch (error) {
        console.error("error in login function")
        return res.status(500).json({ statusCode: 500, message: "internal server error", error: error.message })
    }
}

export async function handleCallback(req, res) {
    try {
        const authSet = authService.handleCallback(req)
        let response = `Authentication successful! Here are your tokens: ${JSON.stringify(authSet)}`;
        return res.status(200).json({ statusCode: 200, message: "authorization done", data: response })


    } catch (error) {
        console.error("errror in handleCallback")
        return res.status(500).json({ statusCode: 500, message: "internal server error", error: error.message })
    }
}