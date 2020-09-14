const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const blogRoutes = require("./routes/blog-routes");
const authRoutes = require("./routes/auth-route");

// ~ LocalStorage
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require("node-localstorage").LocalStorage;
  localStorage = new LocalStorage("./scratch");
}

// ~config
dotenv.config({ path: "./config/config.env" });

const app = express();

// ~ MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "http://localhost:3000" }));
app.use(cookieParser());

// ~ PORT
const PORT = process.env.PORT || 5000;

// ~ ROUTES
app.use("/blog", blogRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`.blue.bold);
});
