require('dotenv').config(); // Carga las variables del archivo .env
console.log('DB_URI:', process.env.DB_URI);

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const dbURI = process.env.DB_URI;
        await mongoose.connect(dbURI);
        console.log('MongoDB connected successfully!');
    } catch (err) {
        console.error('MongoDB connection error: ', err);
        process.exit(1); // Detenemos la ejecución si la conexión falla
    }
};

module.exports = connectDB;