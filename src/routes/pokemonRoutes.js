const express = require('express');
const { getAllPokemons, createPokemon, updatePokemon, deletePokemon } = require('../controllers/pokemonControllers');
const Pokemon = require('../models/pokemonModel');

const router = express.Router();

router.get('/', getAllPokemons);
router.post('/', createPokemon);
router.put('/:id', updatePokemon);
router.delete('/:id', deletePokemon);

// Nuevo endpoint para probar la conexión con MongoDB
router.get('/db-test', async (req, res) => {
    try {
        // Lógica para probar la conexión con la base de datos
        const pokemons = await pokemonModel.find(); // Asegúrate de tener un modelo llamado Pokemon
        res.status(200).json({ success: true, data: pokemons });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;
