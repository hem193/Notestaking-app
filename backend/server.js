const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const { errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api is running..");
});

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(5000, console.log(`server started on PORT ${PORT}`));
