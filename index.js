const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const bodyParser = require("body-parser");
const routes = require("./src/routes/routes");
require('dotenv').config({ debug: true });
const uri = process.env.CONNECTION_STRING;
const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
mongoose.connect(uri).then(() => {
    console.log("Mongodb connected");
}).catch((e) => {
    console.log("failed when trying to connect with mongodb.", e);
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(express.json());

app.use(routes);


app.listen(PORT, () => {
    console.log(`app listen port: ${PORT}`);
});