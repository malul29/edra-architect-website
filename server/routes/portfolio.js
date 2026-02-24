const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const DATA = path.join(__dirname, "../data/portfolio.json");

// In-memory cache — only reads disk when cache is empty/invalidated
let _cache = null;

function read() {
  if (!_cache) {
    _cache = JSON.parse(fs.readFileSync(DATA, "utf-8"));
  }
  return _cache;
}
function write(data) {
  _cache = data; // update cache
  fs.writeFileSync(DATA, JSON.stringify(data, null, 2));
}

// GET all
router.get("/", (req, res) => {
  res.set("Cache-Control", "public, max-age=30");
  res.json(read());
});

// GET single
router.get("/:id", (req, res) => {
  const item = read().find((p) => p.id === req.params.id);
  if (!item) return res.status(404).json({ message: "Not found" });
  res.set("Cache-Control", "public, max-age=30");
  res.json(item);
});


// POST create
router.post("/", (req, res) => {
  const { title, location, category, year, image, description } = req.body;
  if (!title || !location || !category || !year || !image)
    return res.status(400).json({ message: "Required fields: title, location, category, year, image" });

  const items = read();
  const newItem = {
    id: String(Date.now()),
    title, location, category, year, image,
    description: description || "",
  };
  items.unshift(newItem);
  write(items);
  res.status(201).json(newItem);
});

// PUT update
router.put("/:id", (req, res) => {
  const items = read();
  const idx = items.findIndex((p) => p.id === req.params.id);
  if (idx === -1) return res.status(404).json({ message: "Not found" });
  items[idx] = { ...items[idx], ...req.body };
  write(items);
  res.json(items[idx]);
});

// DELETE
router.delete("/:id", (req, res) => {
  let items = read();
  const exists = items.some((p) => p.id === req.params.id);
  if (!exists) return res.status(404).json({ message: "Not found" });
  items = items.filter((p) => p.id !== req.params.id);
  write(items);
  res.json({ message: "Deleted" });
});

module.exports = router;
