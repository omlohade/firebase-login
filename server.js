import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Absolute path to the public folder
const publicPath = path.join(__dirname, "public");

// Serve static files
app.use(express.static(publicPath));

// Handle all other routes with index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
