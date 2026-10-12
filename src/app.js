
const express = require("express");

const noteRoutes = require("./routes/noteRoutes");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();

app.use(express.json());


app.use(express.urlencoded({ extended: true }));

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Notes Task API is running",
  });
});


app.use("/api/notes", noteRoutes);


app.use(errorHandler);

module.exports = app;
