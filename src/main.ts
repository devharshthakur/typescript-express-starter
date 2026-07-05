import express from "express";
import routes from "$routes/routes.js";
import { env } from "$/env.js";
import { errorHandler } from "$middlewares/errorHandler.js";

const app = express();

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(routes);

// Global error handler
app.use(errorHandler);

// Start server with graceful shutdown
const server = app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
  console.log(`http://localhost:${env.PORT}`);
});

function shutdown(signal: string) {
  console.log(`\nReceived ${signal}. Shutting down gracefully...`);
  server.close(() => {
    console.log("Server closed.");
    process.exit(0);
  });
}

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));
