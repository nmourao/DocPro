import express from "express";
import cors from "cors";
import { registerRoutes } from "./routes.js";

const app = express();
app.use(cors());
app.use(express.json());

registerRoutes(app);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Life Admin API listening on ${port}`);
});
