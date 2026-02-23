const express = require("express");
const cors = require("cors");
const path = require("path");

const portfolioRouter = require("./routes/portfolio");
const blogsRouter = require("./routes/blogs");
const servicesRouter = require("./routes/services");

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration - allow all origins in development (for network access)
app.use(cors({
  origin: true, // Allow all origins
  credentials: true
}));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Static uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/portfolio", portfolioRouter);
app.use("/api/blogs", blogsRouter);
app.use("/api/services", servicesRouter);

// Health check
app.get("/api/health", (req, res) => res.json({ status: "ok" }));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`EDRA API server running on port ${PORT}`);
  console.log(`Local: http://localhost:${PORT}`);
  console.log(`Network: Use your IP address to access from other devices`);
});
