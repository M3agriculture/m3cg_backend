const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    full_name: { type: String, default: null },
    email: { type: String, unique: true },
    password: { type: String },
    is_admin: { type: Boolean, default: false },
    token: { type: String }
});

module.exports = mongoose.model("user", userSchema);