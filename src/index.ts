import express from "express";
import { CURRENT_API_VERSION, DEFAULT_PORT } from "./constants";
import { ROUTES } from "./routes/routes";

const app = express();
const PORT = DEFAULT_PORT;

app.use(express.json());

app.get(ROUTES.root, (req, res) => {
  res.json({
    message: `Welcome to BeruProject v${CURRENT_API_VERSION}!`,
    status: "success",
    timestamp: new Date().toISOString(),
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
