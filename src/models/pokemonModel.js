const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: [String], required: true },
    level: { type: Number, default: 1 },
});

module.exports = mongoose.model('Pokemon', pokemonSchema);
