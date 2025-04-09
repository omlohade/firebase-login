import express from "express";
import path from "path";
import { cwd } from "process";

const app = express();

// Get the absolute path to /public using process.cwd()
const publicPath = path.join(cwd(), "public");

// Serve static files from the public folder
app.use(express.static(publicPath));

// Handle all routes with index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
