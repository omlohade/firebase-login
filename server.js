import express from "express";
import path from "path";

const app = express();

// Replace this with your actual absolute path to the public directory
const publicPath = "/public"; // Railway container uses /app as root

app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
