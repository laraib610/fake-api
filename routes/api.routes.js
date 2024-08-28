const express = require("express");

const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");
const blogRoutes = require("./blog.routes");
const app = express();
app.use("/auth", authRoutes);
app.use("/blogs",blogRoutes);
app.use("/users", userRoutes)
module.exports = app;