const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const DATA = path.join(__dirname, "../data/services.json");

let _cache = null;

function read() {
  if (!_cache) {
    _cache = JSON.parse(fs.readFileSync(DATA, "utf-8"));
  }
  return _cache;
}
function write(data) {
  _cache = data;
  fs.writeFileSync(DATA, JSON.stringify(data, null, 2));
}

// GET all
router.get("/", (req, res) => res.json(read()));

// POST create
router.post("/", (req, res) => {
  const { title, description, icon } = req.body;
  if (!title || !description) {
    return res.status(400).json({ message: "Required fields: title, description" });
  }
  const items = read();
  const newItem = {
    id: String(Date.now()),
    title,
    description,
    icon: icon || "01",
  };
  items.push(newItem);
  write(items);
  res.status(201).json(newItem);
});

// PUT update
router.put("/:id", (req, res) => {
  const items = read();
  const idx = items.findIndex((s) => s.id === req.params.id);
  if (idx === -1) return res.status(404).json({ message: "Not found" });
  items[idx] = { ...items[idx], ...req.body };
  write(items);
  res.json(items[idx]);
});

// DELETE
router.delete("/:id", (req, res) => {
  let items = read();
  const exists = items.some((s) => s.id === req.params.id);
  if (!exists) return res.status(404).json({ message: "Not found" });
  items = items.filter((s) => s.id !== req.params.id);
  write(items);
  res.json({ message: "Deleted" });
});

module.exports = router;
