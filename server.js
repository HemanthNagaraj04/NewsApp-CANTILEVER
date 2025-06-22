import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());

const API_KEY = process.env.NEWS_API_KEY;

app.get("/news", async (req, res) => {
  const category = req.query.category || "general";
  const q = req.query.q;
  const url = q
    ? `https://newsapi.org/v2/everything?q=${q}&apiKey=${API_KEY}`
    : `https://newsapi.org/v2/top-headlines?category=${category}&country=in&apiKey=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "News API failed" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
