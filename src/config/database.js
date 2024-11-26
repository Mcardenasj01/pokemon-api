const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => {
        console.error('MongoDB connection error:', err);
        setTimeout(connectDB, 5000); // Intentar reconectar después de 5 segundos
    });
}

module.exports = connectDB;
