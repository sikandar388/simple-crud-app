// import express from 'express';
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from node API.");
});

//..............................for local connection on compass..............................

mongoose
  .connect("mongodb://127.0.0.1:27017/mydatabase")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));

//....................................................................................

// mongoose
//   .connect("mongodb+srv://admin:hafiz%40106248@backenddb.qezmhpy.mongodb.net/Node-API?retryWrites=true&w=majority")
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("MongoDB connection error:", err));

//........................................

// mongoose
//   .connect("backenddb.qezmhpy.mongodb.net")
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("MongoDB connection error:", err));
