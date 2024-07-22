const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // Add this line

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

const usersRouter = require("./routes/users");
const willsRouter = require("./routes/wills");

app.use("/api/users", usersRouter);
app.use("/api/wills", willsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
