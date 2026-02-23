const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const DATA = path.join(__dirname, "../data/services.json");

function read() {
  return JSON.parse(fs.readFileSync(DATA, "utf-8"));
}
function write(data) {
  fs.writeFileSync(DATA, JSON.stringify(data, null, 2));
}

router.get("/", (req, res) => res.json(read()));

router.put("/:id", (req, res) => {
  const items = read();
  const idx = items.findIndex((s) => s.id === req.params.id);
  if (idx === -1) return res.status(404).json({ message: "Not found" });
  items[idx] = { ...items[idx], ...req.body };
  write(items);
  res.json(items[idx]);
});

module.exports = router;
