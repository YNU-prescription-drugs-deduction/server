const mongoose = require('../../database');

const User = new mongoose.Schema({
    id: { type: String, required: true, unique: true, trim: true, lowercase: true },
    password: { type: String, required: true, trim: true },
    name: { type: String, required: true },
    activated: { type: String, required: true}
});

module.exports = mongoose.model('User', User);