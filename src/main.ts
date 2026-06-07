import express from "express";
import healthRouter from "./routes/health.js";

const app = express();

app.use(healthRouter);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
