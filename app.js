require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;
const routes = require("./routes/user.routes");
const logger = require("./middleware/logger");

app.use(express.json());

app.use(logger);

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Hiiiii");
});

console.log("Database URL:", process.env.DATABASE_URL);

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("Error connecting to DB", err);
  });

app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
