const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const DATA = path.join(__dirname, "../data/blogs.json");

function read() {
  return JSON.parse(fs.readFileSync(DATA, "utf-8"));
}
function write(data) {
  fs.writeFileSync(DATA, JSON.stringify(data, null, 2));
}

router.get("/", (req, res) => res.json(read()));

router.get("/:id", (req, res) => {
  const item = read().find((b) => b.id === req.params.id);
  if (!item) return res.status(404).json({ message: "Not found" });
  res.json(item);
});

router.post("/", (req, res) => {
  const { title, date, tag, image, excerpt } = req.body;
  if (!title || !date || !tag || !image || !excerpt)
    return res.status(400).json({ message: "All fields are required" });

  const items = read();
  const newItem = { id: String(Date.now()), title, date, tag, image, excerpt };
  items.unshift(newItem);
  write(items);
  res.status(201).json(newItem);
});

router.put("/:id", (req, res) => {
  const items = read();
  const idx = items.findIndex((b) => b.id === req.params.id);
  if (idx === -1) return res.status(404).json({ message: "Not found" });
  items[idx] = { ...items[idx], ...req.body };
  write(items);
  res.json(items[idx]);
});

router.delete("/:id", (req, res) => {
  let items = read();
  if (!items.some((b) => b.id === req.params.id))
    return res.status(404).json({ message: "Not found" });
  items = items.filter((b) => b.id !== req.params.id);
  write(items);
  res.json({ message: "Deleted" });
});

module.exports = router;
