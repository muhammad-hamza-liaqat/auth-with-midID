
# Authentication Endpoints

These are the available OAuth authentication endpoints for Google and Facebook.

## Google OAuth Endpoints

- **Initiate Google OAuth**  
  Initiates the Google authentication process.

  ```
  GET http://localhost:${process.env.PORT}/auth/google
  ```

- **Google OAuth Callback**  
  The callback URL to handle Google's response after authentication.

  ```
  GET http://localhost:${process.env.PORT}/auth/google/callback
  ```

## Facebook OAuth Endpoints

- **Initiate Facebook OAuth**  
  Initiates the Facebook authentication process.

  ```
  GET http://localhost:${process.env.PORT}/auth/facebook
  ```

- **Facebook OAuth Callback**  
  The callback URL to handle Facebook's response after authentication.

  ```
  GET http://localhost:${process.env.PORT}/auth/facebook/callback
  ```

> Replace `${process.env.PORT}` with the port number your application is running on.
