const fs = require('fs');
const util = require('util');

const logFile = fs.createWriteStream('./error.log', { flags: 'a' });
const logStdout = process.stdout;

console.error = function (msg) {
  logFile.write(util.format(msg) + '\n');
  logStdout.write(util.format(msg) + '\n');
};


require ('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connecté à MongoDB');
    app.listen(PORT, () => {
        console.log(`Serveur lancé sur http://localhost:${PORT}`);
    });
})
.catch((err) => {
    console.error('Erreur de connexion à MongoDB:', err);
});