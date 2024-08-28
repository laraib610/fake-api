const express =require('express');
const app = express();
const process = require("process");
const apiRoutes = require('./routes/api.routes');
const mongoose = require("mongoose");
const cors = require('cors');
const port = 3000;
var MONGODB_URL = 'mongodb+srv://DevApi234:Test1234@atlascluster.7sodj.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster';
console.log(port)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const allowedOrigins = ['http://localhost:3000','http://localhost:4200', 'https://restaurant-apis.vercel.app'];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

mongoose
  .connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    //don't show the log when it is test
    // if (process.env.NODE_ENV !== "test") {
    console.log("Connected to %s", MONGODB_URL);
    console.log("App is running on Port");
    console.log("Press CTRL + C to stop the process. \n");
    // }
  })
  .catch((err) => {
    console.error("App starting error:", err.message);
    process.exit(1);
   
  });
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
    app.get("/status", (req, res) => {
      res.send("Hello World! API is working");
    });
    // 404 error
    app.use((req, res, next) => {
      res.status(404).send("404 error");
    });
  });
  app.use("/api", apiRoutes);
  module.exports = app;
