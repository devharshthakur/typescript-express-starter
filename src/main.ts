import express from "express";
import healthRouter from "#routes/health.js";
import greetRouter from "#routes/greet.js";
import { config } from "#lib/config.js";

const app = express();

app.use(healthRouter);
app.use(greetRouter);

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
  console.log(`http://localhost:${config.PORT}`);
});
