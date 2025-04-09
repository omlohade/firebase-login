import express from "express";
import path from "path";

const app = express();

// 🔥 Replace this with your actual absolute path on your machine or Railway
const absolutePublicPath = "/public"; // e.g., "/Users/yourname/projects/firebase-auth/public"

app.use(express.static(absolutePublicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(absolutePublicPath, "index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
