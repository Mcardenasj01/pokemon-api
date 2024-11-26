const Pokemon = require('../models/pokemonModel');

exports.getAllPokemons = async (req, res) => {
    try {
        const pokemons = await Pokemon.find();
        res.json(pokemons);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createPokemon = async (req, res) => {
    try {
        const newPokemon = new Pokemon(req.body);
        await newPokemon.save();
        res.status(201).json(newPokemon);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updatePokemon = async (req, res) => {
    try {
        const updatedPokemon = await Pokemon.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPokemon) return res.status(404).json({ message: 'Pokemon not found' });
        res.json(updatedPokemon);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deletePokemon = async (req, res) => {
    try {
        const deletedPokemon = await Pokemon.findByIdAndDelete(req.params.id);
        if (!deletedPokemon) return res.status(404).json({ message: 'Pokemon not found' });
        res.json({ message: 'Pokemon deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
