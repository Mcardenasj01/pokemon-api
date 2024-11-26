const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pokemonRoutes = require('./routes/pokemonRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/pokemons', pokemonRoutes);

module.exports = app;
