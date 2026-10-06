require("dotenv").config();
const express = require("express");

const app = express();
const BASE = "https://api.spoonacular.com";
const KEY = process.env.SPOONACULAR_KEY;
const PORT = process.env.PORT || 3000;

if (!KEY) {
  console.warn("Missing SPOONACULAR_KEY. Copy .env.example to .env and add your key.");
}

app.use(express.static("public"));

async function forward(url, res) {
  if (!KEY) return res.status(500).json({ error: "Server has no API key configured." });
  try {
    const r = await fetch(url);
    res.status(r.status).json(await r.json());
  } catch (err) {
    res.status(502).json({ error: "Could not reach Spoonacular." });
  }
}

app.get("/api/search", (req, res) => {
  const q = encodeURIComponent(req.query.query || "");
  forward(`${BASE}/recipes/complexSearch?query=${q}&number=8&apiKey=${KEY}`, res);
});

app.get("/api/recipe/:id", (req, res) => {
  const id = encodeURIComponent(req.params.id);
  forward(`${BASE}/recipes/${id}/information?apiKey=${KEY}`, res);
});

app.listen(PORT, () => console.log(`Recipe Genie running at http://localhost:${PORT}`));
