const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

// Cargar variables de entorno
dotenv.config();

// Importar modelos
const Bote = require('./models/Bote');
const Material = require('./models/Material');
const Participante = require('./models/Participante');
const Ruta = require('./models/Ruta');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Servir archivos HTML desde /public

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error al conectar:', err));

// ------------------------ RUTAS ------------------------ //

// BOTES
app.post('/api/botes', async (req, res) => {
  try {
    const bote = new Bote(req.body);
    await bote.save();
    res.json(bote);
  } catch (err) {
    res.status(400).json({ error: 'Error al guardar el bote' });
  }
});
app.get('/api/botes', async (req, res) => {
  const botes = await Bote.find();
  res.json(b

