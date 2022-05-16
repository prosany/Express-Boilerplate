const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const createError = require("http-errors");
const compression = require("compression");
const { PORT } = require("./Config");

const app = express();

// Middlewares
app.use(cors());
app.use(compression());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("Public"));

// Routes
app.get("/", async (req, res, next) => {
  res.status(200).send({
    status: 1,
    message: "🎉 Congratulations! Your Server Works Perfectly! 🎉",
  });
});

// Error Handling
app.use(async (req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: 0,
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`🎉 Server Up & Running...`);
});
