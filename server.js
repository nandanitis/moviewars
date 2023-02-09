require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const movies = require("./routes/movies");
const tvshows = require("./routes/tvshows");
const contactus = require("./routes/contactus");

//express app
const app = new express();
const cors = require("cors");
app.use(cors());

//midelware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/movies", movies);
app.use("/api/tvshows", tvshows);
app.use("/contactus",contactus);

//connect to mongoDB
mongoose
  .connect(process.env.MONGO_URI || 4000)
  .then(() => {
    //listen for requets
    app.listen(process.env.PORT, () => {
      console.log("Connected to Database and Running on PORT 4000");
    });
  })
  .catch((err) => {
    console.log(err);
  });


