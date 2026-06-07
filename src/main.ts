import express from "express";
import healthRouter from "./routes/health.js";
import { config } from "./config.js";

const app = express();

app.use(healthRouter);

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
  console.log(`http://localhost:${config.PORT}`);
});
