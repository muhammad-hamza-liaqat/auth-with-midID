import { Issuer, generators } from 'openid-client';
import dotenv from "dotenv";
dotenv.config();

let client;

export async function initializeClient() {
    const criiptoDomain = process.env.CRIIPTO_DOMAIN;
    const clientId = process.env.CLIENT_ID;
    const clientSecret = process.env.CRIIPTO_CLIENT_SECRET;
    const redirectUri = process.env.REDIRECT_URI;

    if (!criiptoDomain || !clientId || !clientSecret || !redirectUri) {
        throw new Error("One or more environment variables are undefined. Check your .env configuration.");
    }

    const discoveryUrl = `${criiptoDomain.trim()}/.well-known/openid-configuration`;
    console.log("Discovery URL:", discoveryUrl);

    const issuer = await Issuer.discover(discoveryUrl);
    client = new issuer.Client({
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uris: [redirectUri],
        response_types: ['code'],
    });
}

export function getAuthorizationUrl() {
    const state = generators.state();
    const nonce = generators.nonce();
    return client.authorizationUrl({
        scope: 'openid',
        state,
        nonce,
        acr_values: 'urn:grn:authn:dk:mitid:substantial',
    });
}

export async function handleCallback(req) {
    const params = client.callbackParams(req);
    return await client.callback(process.env.REDIRECT_URI, params, { state: params.state });
}
