const express = require('express');
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const port = 5000;

app.use(cors()); 

//MongDB Connection
mongoose

.connect("mongodb://127.0.0.1/ECommerce")

.then(() => console.log("Connected to MongoDB..."))

.catch((err) => console.error("Could not connect to MongoDB..."));


//Server Connection

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});