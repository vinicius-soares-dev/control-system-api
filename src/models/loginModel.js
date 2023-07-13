const mongoose = require("mongoose");

const LoginDataSchema = mongoose.Schema({
    email: String,
    password: String,
});

module.exports = mongoose.model("Users", LoginDataSchema);