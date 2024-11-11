# Read Me

This project implements OAuth authentication using Passport.js for Google, Facebook, and GitHub, with user information stored in MongoDB.

## Setup

1. **Install Dependencies**  
   Run the following command to install all necessary npm modules:

   ```bash
   npm install
   ```

2. **MongoDB Setup**  
   Ensure MongoDB is installed locally or use a MongoDB Atlas cluster.

3. **Environment Variables**
   - Review `.env.dist.example`, which contains all environment variables used in this project.
   - Create a `.env` file in the root directory.
   - Copy all variable names from `.env.dist.example` to `.env` and add your credentials.

## Authentication Endpoints

These endpoints initiate and handle OAuth authentication flows for Google, Facebook, and GitHub.

### Google OAuth Endpoints

- **Initiate Google OAuth**  
  Starts the Google authentication process.

  ```
  GET http://localhost:${process.env.PORT}/auth/google
  ```

- **Google OAuth Callback**  
  Handles Google’s response after authentication.

  ```
  GET http://localhost:${process.env.PORT}/auth/google/callback
  ```

### Facebook OAuth Endpoints

- **Initiate Facebook OAuth**  
  Starts the Facebook authentication process.

  ```
  GET http://localhost:${process.env.PORT}/auth/facebook
  ```

- **Facebook OAuth Callback**  
  Handles Facebook’s response after authentication.

  ```
  GET http://localhost:${process.env.PORT}/auth/facebook/callback
  ```

### GitHub OAuth Endpoints

- **Initiate GitHub OAuth**  
  Starts the GitHub authentication process.

  ```
  GET http://localhost:${process.env.PORT}/auth/github
  ```

- **GitHub OAuth Callback**  
  Handles GitHub’s response after authentication.

  ```
  GET http://localhost:${process.env.PORT}/auth/github/callback
  ```

### Twitter OAuth Endpoints

- **Initiate Twitter OAuth**  
  Starts the Twitter authentication process.

  ```
  GET http://localhost:${process.env.PORT}/auth/twitter
  ```

- **twitter OAuth Callback**  
  Handles twitter’s response after authentication.

  ```
  GET http://localhost:${process.env.PORT}/auth/twitter/callback
  ```

> **Note**: Replace `${process.env.PORT}` with the port number your application is running on.
> **EsLint**: npx eslint . --fix To apply automatic fixes for minor issues
