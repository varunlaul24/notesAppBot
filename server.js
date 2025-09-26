import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIRECT_LINE_SECRET = process.env.DIRECT_LINE_SECRET;

app.use(express.static(__dirname));

app.get("/api/token", async (req, res) => {
  try {
    const response = await globalThis.fetch("https://directline.botframework.com/v3/directline/tokens/generate", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${DIRECT_LINE_SECRET}`
      }
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error generating token");
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
