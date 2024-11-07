import dotenv from "dotenv";
dotenv.config();

import express from "express";
import authRoutes from "./routes/auth.routes.js";
import { initializeClient } from "./services/authService.js";

const app = express();
app.use("/", authRoutes);

initializeClient()
  .then(() => {
    console.log("OpenID client initialized");
  })
  .catch((error) => {
    console.error("Failed to initialize OpenID client:", error);
    process.exit(1);
  });

app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
