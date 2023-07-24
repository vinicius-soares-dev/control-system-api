const mongoose = require("mongoose");

const usersDataSchema = new mongoose.Schema({
    email: String,
    tel: String,
    address: String,
    username: String,
    description: String,
    tittle: String,
    nextVisit: String
});

module.exports = mongoose.model("Clients", usersDataSchema);