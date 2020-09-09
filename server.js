const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");

const blogRoutes = require("./routes/blog-routes");
const connectDB = require("./config/db");

// ~config
dotenv.config({ path: "./config/config.env" });

const app = express();

// ~ MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "http://localhost:3000" }));

// ~ PORT
const PORT = process.env.PORT || 5000;

// ~ CONNECTING WITH THE DATABASE
connectDB();

// ~ ROUTES
app.use("/blog", blogRoutes);

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`.blue.bold);
});
