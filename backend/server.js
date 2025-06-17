require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
    console.log('Connecté à MongoDB');
    app.listen(PORT, () => {
        console.log(`Serveur lancé sur le port ${PORT}`);
    });
})
.catch((err) => {
    console.error('Erreur de connexion à MongoDB:', err.message);
});